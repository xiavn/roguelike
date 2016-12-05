//Defaults
export const dHeight = 40;
export const dWidth = 40;

export default class Dungeon {
	constructor(width = dWidth, height = dHeight) {
		this._map = new DungeonMap(width, height);
	}

	get map() {
		return this._map.map;
	}
}

export class DungeonMap {
	constructor(width = dWidth, height = dHeight) {
		this.width = width;
		this.height = height;
		let map = [];
		for (let i = 0; i < width; i++) {
			map.push([]);
		}

		map.forEach((column, i) => {
			for (let p = 0; p < height; p++) {
				column.push(new Cell(i,p));
			}
		});
		this.map = map;
	}

	chooseCell() {
		let x = Math.floor(Math.random() * this.width) + 1,
			y = Math.floor(Math.random() * this.height) + 1;
		return this.map[x][y];
	}
}

export class Cell {
	constructor(x, y) {
		this.location = [x, y];
		this.type = "wall";
		this.visited = false;
	}

	visit() {
		this.visited = true;
	}
}