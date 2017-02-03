import { expect } from "chai";

import Entity from "../src/helpers/Dungeon/Entity";
import Map from "../src/helpers/Dungeon/Map";
import Maze from "../src/helpers/Dungeon/MapMaze";
import Cell from "../src/helpers/Dungeon/Cell";
import Compass from "../src/helpers/Dungeon/Compass";
import Direction from "../src/helpers/Dungeon/Direction";


describe("Entity", () => {
	const maze = new Map(20,20);
	const cell = maze.chooseCell();
	const entity = new Entity(maze, cell);
	describe(".dungeon", () => {
		it("is an instance of Map", () => {
			expect(entity.dungeon).to.be.an.instanceOf(Map);
		});
	});
	describe(".cell", () => {
		it("is an instance of Cell", () => {
			expect(entity.cell).to.be.an.instanceOf(Cell);
		});
	});
	describe(".compass", () => {
		it("is an instance of Compass", () => {
			expect(entity.compass).to.be.an.instanceOf(Compass);
		});
	});
	describe(".direction", () => {
		it("is an instance of Direction", () => {
			expect(entity.direction).to.be.an.instanceOf(Direction);
		});
	});
	describe(".x", () => {
		it("returns the x location of .cell", () => {
			expect(entity.x).to.equal(entity.cell.location[0]);
		});	
	});
	describe(".y", () => {
		it("returns the y location of .cell", () => {
			expect(entity.y).to.equal(entity.cell.location[1]);
		});	
	});
	describe(".move(dir)", () => {
		it("updates the .cell to a new location in the direction if it's a floor tile and not out of bounds", () => {
			const goNorth = new Entity(maze, cell);
			goNorth.cell = maze.map[0][1];
			goNorth.cell.type = "floor";
			maze.map[0][0].type = "floor";
			maze.map[0][0].createExit("south");
			goNorth.cell.createExit("north");
			goNorth.direction = goNorth.compass.north;
			goNorth.move();
			expect(goNorth.cell).to.eql(maze.map[0][0]);
		});
	});
	describe(".assess(dir)", () => {
		it("checks if the cell in the current direction is in bounds and a rock", () => {
			entity.cell = maze.map[0][5];
			entity.direction = entity.compass.north;
			maze.map[0][4].type = "rock";
			expect(entity.assess()).to.eql(true);
		});
		it("checks if the cell in the current direction is in bounds and a specified type", () => {
			entity.cell = maze.map[1][5];
			entity.direction = entity.compass.north;
			maze.map[1][4].type = "floor";
			expect(entity.assess("floor")).to.eql(true);
			entity.direction = entity.compass.south;
			expect(entity.assess("floor")).to.eql(false);
		});
		it("fails if out of bounds", () => {
			entity.cell = maze.map[0][0];
			entity.direction = entity.compass.north;
			expect(entity.assess("floor")).to.eql(false);
		});
	});
});
	