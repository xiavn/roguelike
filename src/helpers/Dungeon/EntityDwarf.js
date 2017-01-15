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

	digTunnel(blocked = [], randomness = 25) {
		if (blocked.length === 4) {
			//console.log(`all directions blocked`);
			if (this.cellsOfType("rock").length > 0) { //There are still rock tiles
				this.cell = this.map.chooseCell(this.cellsOfType("floor")); //Choose new excavated tile
				this.direction = this.compass.spin();
				this.digTunnel();
			} else {
				//console.log("all cells visited!");
			}
		} else if (blocked.indexOf(this.direction) === -1) { //The current direction is not blocked
			let x = this.x + this.direction.location[0],
				y = this.y + this.direction.location[1];
			if (this.dungeon.isInside(x,y) && this.dungeon.isType("rock",x,y)) { //Is direction valid?
				this.dig();
				if (diceRoller("d100") < randomness) {
					//change direction
					//console.log("change!");
					this.direction = this.compass.spin([this.direction]);
				}
				//console.log(`moving ${currentDir}`);
				this.digTunnel(blocked);
			} else {
				//console.log(`can't go ${currentDir}`);
				blocked.push(this.direction);
				this.direction = this.compass.spin(blocked);
				this.digTunnel(blocked);
			}
		}
	}
}