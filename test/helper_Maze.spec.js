import { expect } from "chai";

import Map from "../src/helpers/Dungeon/Map";
import Maze from "../src/helpers/Dungeon/MapMaze";
import Compass from "../src/helpers/Dungeon/Compass";
import Cell from "../src/helpers/Dungeon/Cell";
import Entity from "../src/helpers/Dungeon/Entity";

describe("Maze", () => {
	const maze = new Maze(15,15);
	it("is a type of Map", () => {
		expect(maze).to.be.an.instanceOf(Map);
	});
	describe.skip(".createMaze()", () => {
		it("should create a maze that is 'perfect' - every tile can be reached from every other", () => {
			let floor = maze.cellsOfType("floor"),
				begin = maze.chooseCell(floor),
				finish = maze.chooseCell(floor);

			let directions = ["north", "south", "east", "west"];
			const Ragnar = new Entity(maze, begin);
			const moveToExit = (start, end, breadcrumbs = []) => {
				if (start === end) {
					//console.log(`did it: ${breadcrumbs}`);
					return true;
				}
				if (breadcrumbs.indexOf(start) !== -1) {
					//console.log(`been here! ${start.location}`);
					return false;
				}
				let trail = [...breadcrumbs, start];
				//console.log(`trail so far: ${trail}`);
				for (let i = 0; i < 4; i++) {
					Ragnar.direction = Ragnar.compass[directions[i]];
					if (~start.exits.indexOf(Ragnar.direction)) {
						//console.log(`${start.location} - going: ${Ragnar.direction.name}`);
						Ragnar.cell = start;
						Ragnar.move();
						let current = Ragnar.cell;
						//console.log(current.location);
						if(moveToExit(current, end, trail)) {
							return true;
						}
					} else {
						//console.log(`${start.location} - can't go ${Ragnar.direction.name}`);
					}
				}
			};

			expect(moveToExit(begin, finish)).to.be.true;
		});
	});	
});
	