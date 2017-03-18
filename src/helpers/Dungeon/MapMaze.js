import Map from "./Map";
import Dwarf from "./EntityDwarf";


export default class Maze extends Map {
	constructor(width, height) {
		super(width, height);
		this.createMaze();
	}

	createMaze() {

		// const countExits = (cell) => {
		// 	let count = 0;
		// 	for (let exit in cell.exits) {
		// 		if (cell.exits[exit]) {
		// 			count++;
		// 		}
		// 	}
		// 	return count;
		// };

		// const makeSparse = (count) => {
		// 	for (let i = 0; i < count; i++) {
		// 		let deadEnds = [];
		// 		this.map.forEach((column) => {
		// 			column.forEach((cell) => {
		// 				if (countExits(cell) === 1) {
		// 					deadEnds.push(cell);
		// 				}
		// 			});
		// 		});

		// 		deadEnds.forEach((cell) => {
		// 			for (let exit in cell.exits) {
		// 				if (cell.exits[exit]) {
		// 					cell.type = "rock";
		// 					cell.exits[exit] = false;
		// 					let neighbour = this.move(exit, cell);
		// 					switch(exit) {
		// 						case 'north':
		// 							neighbour.exits.south = false;
		// 							break;
		// 						case 'south':
		// 							neighbour.exits.north = false;
		// 							break;
		// 						case 'east':
		// 							neighbour.exits.west = false;
		// 							break;
		// 						case 'west':
		// 							neighbour.exits.east = false;
		// 							break;
		// 					}
		// 				}
		// 			}
		// 		});
		// 	}
		// };

		// const removeDeadEnds = (chance) => {
		// 	this.map.forEach((column) => {
		// 		column.forEach((cell) => {
		// 			if (countExits(cell) === 1 && diceRoller("d100") < chance) {
		// 				blocked = [];
		// 				for (let exit in cell.exits) {
		// 					if (cell.exits[exit]) {
		// 						blocked.push(exit);
		// 					}
		// 				}
		// 				this.currentCell = cell;
		// 				currentDir = this.chooseDirection(blocked);
		// 				//console.log(cell.location);
		// 				linkDeadEnd(cell);
		// 			}
		// 		});
		// 	});
		// };

		// const linkDeadEnd = (start) => {
		// 	if (blocked.length !== 4) {
		// 		if (blocked.indexOf(currentDir) === -1) {
		// 			if (this.checkDirection(currentDir,false)) {
		// 				this.tunnel(currentDir);
		// 				if (this.currentCell.type === "floor") {
		// 					this.currentCell.visit(currentDir);
		// 				} else {
		// 					this.currentCell.visit(currentDir);
		// 					blocked = [];
		// 					//console.log(`moving ${currentDir}`);
		// 					linkDeadEnd(start);
		// 				}
		// 			} else {
		// 				//console.log(`can't go ${currentDir}`);
		// 				blocked.push(currentDir);
		// 				currentDir = this.chooseDirection(blocked);
		// 				linkDeadEnd(start);
		// 			}
		// 		}
		// 	}
		// };

		// const createRoom = () => {

		// };
		const Dorn = new Dwarf(this, this.chooseCell());
		Dorn.cell.excavate();
		//console.log(`current cell: ${this.currentCell.location[0]},${this.currentCell.location[1]}`);
		Dorn.checkRoute();
		Dorn.collapseDeadEnds(30);
		Dorn.connectDeadEnds(80);
		// removeDeadEnds(80);
	}
}