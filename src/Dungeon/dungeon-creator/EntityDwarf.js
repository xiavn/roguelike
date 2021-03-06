import Entity from "./Entity"
import diceRoller from "../../dice-roller"

export default class Dwarf extends Entity {
	constructor(dungeon, cell) {
		super(dungeon, cell)
	}

	dig(dir = this.direction, length = 1, allowed = ["rock"]) {
		while (length > 0) {
			let x = this.x + dir.location[0],
				y = this.y + dir.location[1]
			if (this.assess(allowed,dir)) {
				this.cell.createExit(dir)
				this.cell = this.dungeon.map[x][y]
				this.cell.excavate()
				this.cell.createExit(this.compass[dir.opposite])
			}
			length--
		}
	}

	digToTunnel() {
		let blocked = [...this.cell.exits]
		this.direction = this.compass.spin(blocked)
		while(this.cell.exits.length < 2) {
			if(this.dungeon.isInside(this.direction, this.cell)) {
				this.dig(this.direction, 1, ["rock", "floor"])
				blocked = [this.compass[this.direction.opposite]]
			} else {
				blocked.push(this.direction)
				this.direction = this.compass.spin(blocked)
			}
		}
	}

	collapse(cell = this.cell) {
		this.cell = cell
		this.cell.bury()
		const exits = [...this.cell.exits]
		exits.forEach((direction) => {
			this.cell.removeExit(direction)
			this.move(direction)
			this.cell.removeExit(this.compass[direction.opposite])
			this.cell = cell
		});
	}

	checkRoute(breadcrumbs = [], blocked = [], randomness = 25) {
		//Add the cell to the array of breadcrumbs, if not already there.
		if (breadcrumbs.indexOf(this.cell) === -1) {
			breadcrumbs.push(this.cell)
		}
		//Add exits to blocked
		if (blocked.length < 4 && this.cell.exits.length > 0) {
			this.cell.exits.forEach((direction, i) => {
				if (!~blocked.indexOf(direction)) {
					blocked.push(this.cell.exits[i])
				}
			});
		}
		//If all directions on this cell are blocked by already excavated cells.
		if (blocked.length === 4) {
			//Remove this cell from the breadcrumbs array.
			breadcrumbs.splice(breadcrumbs.indexOf(this.cell),1)
			//If there are still unexcavated cells.
			if (this.dungeon.cellsOfType("rock").length > 0) {
				this.cell = this.dungeon.chooseCell(breadcrumbs)
				blocked = [...this.cell.exits]
				this.checkRoute(breadcrumbs,blocked)
			} else {
				return
				//All cells are visited, end recursion.
			}
		//The current direction is blocked or already an exit on this cell
		} else if (~blocked.indexOf(this.direction)) {
			//Get a new direction
			this.direction = this.compass.spin(blocked)
			//Dig a new tunnel.
			this.checkRoute(breadcrumbs, blocked)
		//The current direction is not blocked on this cell.
		} else {
			//Check if the cell in current direction is inside the map and is rock.
			if (this.assess()) {
				//Actually dig the tunnel.
				this.dig()
				//Make a randomness check.
				if (diceRoller("d100") < randomness) {
					//Change direction
					this.direction = this.compass.spin([this.direction])
				}
				//Dig a new tunnel.
				blocked = [...this.cell.exits]
				this.checkRoute(breadcrumbs)
			//The cell in current direction is not suitable.
			} else {
				//Add it to the blocked array.
				blocked.push(this.direction)
				//If still directions left, find a new unblocked direction.
				if(blocked.length < 4) {
					this.direction = this.compass.spin(blocked)
				}
				//Dig a new tunnel.
				this.checkRoute(breadcrumbs, blocked)
			}
		}
	}

	collapseDeadEnds(count = 1) {
		for (let i = 0; i < count; i++) {
			this.dungeon.deadEnds.forEach((cell) => {
				this.collapse(cell)
			});
		}
	}

	connectDeadEnds(chance = 100) {
		this.dungeon.deadEnds.forEach((cell) => {
			if (diceRoller("d100") < chance) {
				this.cell = cell
				this.digToTunnel()
			}
		})
	}
}