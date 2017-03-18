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

	assess(types = ["rock"], dir = this.direction) {
		return types.some((type) => {
			return this.dungeon.isInside(dir, this.cell) && this.dungeon.isType(type, dir, this.cell);
		});
	}

	move(dir = this.direction) {
		let x = this.x + dir.location[0],
			y = this.y + dir.location[1];

		if (this.assess(["floor"], dir)) {
			this.cell = this.dungeon.map[x][y];
		}
	}

	
}