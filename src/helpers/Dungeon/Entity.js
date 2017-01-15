export default class Entity {
	constructor(dungeon, cell) {
		this.dungeon = dungeon;
		this.cell = cell;
		this.compass = this.dungeon.compass;
		this.direction = this.compass.spin();
	}

	get x() {
		return this.cell.location[0];
	}

	get y() {
		return this.cell.location[1];
	}

	move(dir = this.direction) {
		let x = this.x + dir.location[0],
			y = this.y + dir.location[1];

		if (this.dungeon.isInside(x,y) && this.dungeon.isType("floor",x,y)) {
			this.cell = this.dungeon.map[x][y];
		}
	}

	
}