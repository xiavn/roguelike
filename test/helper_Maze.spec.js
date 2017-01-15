import { expect } from "chai";

import Map from "../src/helpers/Dungeon/Map";
import Maze from "../src/helpers/Dungeon/MapMaze";
import Compass from "../src/helpers/Dungeon/Compass";
import Cell from "../src/helpers/Dungeon/Cell";
import Entity from "../src/helpers/Dungeon/Entity";

describe("Maze", () => {
	const maze = new Maze(20,30);
	it("is a type of Map", () => {
		expect(maze).to.be.an.instanceOf(Map);
	});
	describe(".createMaze()", () => {
		// it("causes every tile to be a floor", () => {
		// 	maze.map.forEach((column) => {
		// 		column.forEach((cell) => {
		// 			expect(cell.type).to.equal("floor");
		// 		});
		// 	});
		// });	
		// it("should create a maze that is 'perfect' - every tile can be reached from every other", () => {
		// 	let floor = maze.cellsOfType("floor"),
		// 		begin = maze.chooseCell(floor),
		// 		finish = maze.chooseCell(floor);

		// 	let directions = ["north", "south", "east", "west"];

		// 	const Ragnar = new Entity(maze, begin);

		// 	console.log(begin);
		// 	console.log(finish);

		// 	console.log(maze.mapPrint);

		// 	const moveToExit = (start, end, breadcrumbs = []) => {
		// 		if (start === end) {
		// 			console.log(`did it: ${breadcrumbs}`);
		// 			return true;
		// 		}
		// 		if (breadcrumbs.indexOf(start.location) !== -1) {
		// 			//console.log(`been here! ${start.location}`);
		// 			return false;
		// 		}
		// 		let trail = [...breadcrumbs, start.location];
		// 		//console.log(`trail so far: ${trail}`);
		// 		for (let i = 0; i < 4; i++) {
		// 			Ragnar.direction = directions[i];
		// 			if (start.exits.indexOf(Ragnar.direction) !== -1) {
		// 				Ragnar.move();
		// 				let current = Ragnar.cell;
		// 				//console.log(`going: ${dir}`);
		// 				if(moveToExit(current, end, trail)) {
		// 					return true;
		// 				}
		// 			} else {
		// 				//console.log(`${start.location} - can't go ${dir}`);
		// 			}
		// 		}
		// 	};

		// 	expect(moveToExit(begin, finish)).to.be.true;
		// });
	});	
});
	