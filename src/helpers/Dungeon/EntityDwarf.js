import Entity from "./Entity";
import diceRoller from "../dice";

export default class Dwarf extends Entity {
	constructor(dungeon, cell) {
		super(dungeon, cell);
	}

	dig(dir = this.direction) {
		let x = this.x + dir.location[0],
			y = this.y + dir.location[1];
		if (this.dungeon.isInside(x,y) && this.dungeon.isType("rock",x,y)) {
			this.cell.createExit(dir.name);
			this.cell = this.dungeon.map[x][y];
			this.cell.excavate();
			this.cell.createExit(dir.opposite);
		}
	}

	digTunnel(open = [], blocked = [], randomness = 25) {
		if (open.indexOf(this.cell) === -1) {
			open.push(this.cell);
		}
		if (blocked.length === 4) {
			open.splice(open.indexOf(this.cell),1);
			//console.log(`all directions blocked`);
			if (this.dungeon.cellsOfType("rock").length > 0) { //There are still rock tiles
				//console.log(this.dungeon.cellsOfType("rock").length);
				this.cell = this.dungeon.chooseCell(open); //Choose new excavated tile
				this.direction = this.compass.spin();
				this.digTunnel(open);
			} else {
				//console.log("all cells visited!");
			}
		} else if (blocked.indexOf(this.direction) === -1) { //The current direction is not blocked
			let x = this.x + this.direction.location[0],
				y = this.y + this.direction.location[1];
			if (this.dungeon.isInside(x,y) && this.dungeon.isType("rock",x,y)) { //Is direction valid?
				//console.log(`digging ${this.direction.name}`);
				this.dig();
				if (diceRoller("d100") < randomness) {
					//change direction
					//console.log("change!");
					this.direction = this.compass.spin([this.direction]);
					//console.log(this.direction.name);
				}
				this.digTunnel(open);
			} else {
				//console.log(`can't go ${this.direction.name}`);
				blocked.push(this.direction);
				this.direction = this.compass.spin(blocked);
				this.digTunnel(open, blocked);
			}
		}
	}
}