import diceRoller from "./dice";

//Defaults
export const dHeight = 40;
export const dWidth = 40;

export default class Dungeon {
	constructor(width = dWidth, height = dHeight) {
		this._map = new DungeonMap(width, height);
		this._map.createMaze();
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

	get mapPrint() {
		let rows = [];
		for (let i = 0; i < this.height; i++) {
			rows.push([]);
			for (let p = 0; p< this.width; p++) {
				let symbol = this.map[p][i].type ==='floor' ? 'X' : ' ';
				rows[i] += symbol;
			}
		}
		
		let string = rows.join('\n');
		return string;
	}

	get notVisited() {
		let available = [];
		for(let i = 0; i < this.width; i++) {
			for(let p = 0; p < this.height; p++) {
				if (this.map[i][p].visited === false) {
					available.push([i,p]);
				}
			}
		}
		return available;
	}

	get visited() {
		let available = [];
		for(let i = 0; i < this.width; i++) {
			for(let p = 0; p < this.height; p++) {
				if (this.map[i][p].visited) {
					available.push([i,p]);
				}
			}
		}
		return available;
	}

	cellsOfType(type) {
		let available = [];
		for(let i = 0; i < this.width; i++) {
			for(let p = 0; p < this.height; p++) {
				if (this.map[i][p].type === type) {
					available.push([i,p]);
				}
			}
		}
		return available;
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

	chooseCell(list = []) {
		if (list.length > 0) {
			const n = Math.floor(Math.random() * list.length),
				cell = list[n],
				x = cell[0],
				y = cell[1];

			return this.map[x][y];

		} else {
			let x = Math.floor(Math.random() * this.width),
			y = Math.floor(Math.random() * this.height);
			
			return this.map[x][y];
		} 
	}

	chooseDirection(exclude = []) {
		const directions = ["north", "south", "east", "west"];
		let available = [];
		for (let i = 0; i<directions.length; i++) {
			if (exclude.indexOf(directions[i]) === -1) {
				available.push(directions[i]);
			}
		}
		const direction = Math.floor(Math.random() * available.length);
		return available[direction];
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

	move(dir, from = this.currentCell) {
		let x = from.location[0],
			y = from.location[1];
		switch(dir) {
			case "north":
				if (y <= 0) { break; }
				y--;
				break;
			case "east":
				if (x >= this.width - 1) { break; }
				x++;
				break;
			case "south":
				if (y >= this.height - 1) { break; }
				y++;
				break;
			case "west":
				if (x <= 0) { break; }
				x--;
				break;
			default:
				break;
		}
		return this.map[x][y];
	}

	tunnel(dir) {
		let x = this.currentCell.location[0],
			y = this.currentCell.location[1];
		switch(dir) {
			case "north":
				if (y <= 0) { break; }
				this.currentCell.exits.north = true;
				this.currentCell = this.move('north');
				break;
			case "east":
				if (x >= this.width - 1) { break; }
				this.currentCell.exits.east = true;
				this.currentCell = this.move('east');
				break;
			case "south":
				if (y >= this.height - 1) { break; }
				this.currentCell.exits.south = true;
				this.currentCell = this.move('south');
				break;
			case "west":
				if (x <= 0) { break; }
				this.currentCell.exits.west = true;
				this.currentCell = this.move('west');
				break;
			default:
				break;
		}
	}

	createMaze() {
		const findUnvisited = () => {
			if (blocked.length === 4) {
				//console.log(`all directions blocked`);
				if (this.notVisited.length > 0) {
					this.currentCell = this.chooseCell(this.visited);
					this.currentCell.visit();
					blocked = [];
					currentDir = this.chooseDirection();
					findUnvisited();
				} else {
					//console.log("all cells visited!");
				}
			} else if (blocked.indexOf(currentDir) === -1) {
				if (this.checkDirection(currentDir)) {
					this.tunnel(currentDir);
					this.currentCell.visit(currentDir);
					blocked = [];
					if (diceRoller("d100") < randomness) {
						//change direction
						//console.log("change!");
						currentDir = this.chooseDirection([currentDir]);
					}
					//console.log(`moving ${currentDir}`);
					findUnvisited();
				} else {
					//console.log(`can't go ${currentDir}`);
					blocked.push(currentDir);
					currentDir = this.chooseDirection(blocked);
					findUnvisited();
				}
			}
		};

		const countExits = (cell) => {
			let count = 0;
			for (let exit in cell.exits) {
				if (cell.exits[exit]) {
					count++;
				}
			}
			return count;
		};

		const makeSparse = (count) => {
			for (let i = 0; i < count; i++) {
				let deadEnds = [];
				this.map.forEach((column) => {
					column.forEach((cell) => {
						if (countExits(cell) === 1) {
							deadEnds.push(cell);
						}
					});
				});

				deadEnds.forEach((cell) => {
					for (let exit in cell.exits) {
						if (cell.exits[exit]) {
							cell.type = "rock";
							cell.exits[exit] = false;
							let neighbour = this.move(exit, cell);
							switch(exit) {
								case 'north':
									neighbour.exits.south = false;
									break;
								case 'south':
									neighbour.exits.north = false;
									break;
								case 'east':
									neighbour.exits.west = false;
									break;
								case 'west':
									neighbour.exits.east = false;
									break;
							}
						}
					}
				});
			}

			
		};

		this.currentCell.visit();
		//console.log(`current cell: ${this.currentCell.location[0]},${this.currentCell.location[1]}`);
		let currentDir = this.chooseDirection(),
			blocked = [],
			randomness = 10; //Controls twistiness of maze, between 1-100.
		findUnvisited();
		makeSparse(35);
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

	visit(from = 'start') {
		this.visited = true;
		this.type = 'floor';
		if (from !== 'start') {
			switch(from) {
				case 'north':
					this.exits.south = true;
					break;
				case 'south':
					this.exits.north = true;
					break;
				case 'east':
					this.exits.west = true;
					break;
				case 'west':
					this.exits.east = true;
					break;
			}
			
		}
	}
}