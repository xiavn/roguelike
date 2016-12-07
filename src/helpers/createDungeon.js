import diceRoller from "./dice";

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
		
		this.map = this.createStartMap();
		this.currentCell = this.chooseCell();
	}

	createStartMap() {
		let map = [];
		for (let i = 0; i < this.width; i++) {
			map.push([]);
		}

		map.forEach((column, i) => {
			for (let p = 0; p < this.height; p++) {
				column.push(new Cell(i,p));
			}
		});
		return map;
	}

	chooseCell() {
		let x = Math.floor(Math.random() * this.width - 1) + 1,
			y = Math.floor(Math.random() * this.height - 1) + 1;
		return this.map[x][y];
	}

	chooseDirection() {
		const direction = diceRoller("1d4");
		switch (direction) {
			case 1:
				return "north";
			case 2:
				return "east";
			case 3:
				return "south";
			case 4:
				return "west";
			default:
				return "north";
		}
	}

	checkDirection(dir,visited = true) {
		let x = this.currentCell.location[0],
			y = this.currentCell.location[1];
		switch(dir) {
			case "north":
				if (y <= 0) { return false; }
				if (visited && this.map[x][y-1].visited) { return false; }
				return true;
			case "east":
				if (x >= this.width - 1) { return false; }
				if (visited && this.map[x+1][y].visited) { return false; }
				return true;
			case "south":
				if (y >= this.height - 1) { return false; }
				if (visited && this.map[x][y+1].visited) { return false; }
				return true;
			case "west":
				if (x <= 0) { return false; }
				if (visited && this.map[x-1][y].visited) { return false; }
				return true;
		}
	}

	tunnel(dir) {
		let x = this.currentCell.location[0],
			y = this.currentCell.location[1];
		switch(dir) {
			case "north":
				if (y <= 0) { break; }
				this.currentCell.exits.north = true;
				y--;
				break;
			case "east":
				if (x >= this.width - 1) { break; }
				this.currentCell.exits.east = true;
				x++;
				break;
			case "south":
				if (y >= this.height - 1) { break; }
				this.currentCell.exits.south = true;
				y++;
				break;
			case "west":
				if (x <= 0) { break; }
				this.currentCell.exits.west = true;
				x--;
				break;
			default:
				break;
		}
		this.currentCell = this.map[x][y];
	}

	createMaze() {
		this.currentCell.visit();
		let currentDir = this.chooseDirection;

	}
}

export class Cell {
	constructor(x, y) {
		this.location = [x, y];
		this.type = "wall";
		this.visited = false;
		this.exits = {
			north: false,
			east: false,
			south: false,
			west: false
		};
	}

	visit() {
		this.visited = true;
	}
}