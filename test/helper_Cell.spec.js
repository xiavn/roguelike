import { expect } from "chai";

import Cell from "../src/helpers/Dungeon/Cell";

describe("Cell", () => {
	const cell = new Cell(1,5);
	describe(".location", () => {
		it("is an array with an x,y  co-ordinate", () => {
			expect(cell.location).to.be.an("array")
				.with.length(2);
			expect(cell.location[0]).to.equal(1);
		});
	});
	describe(".type", () => {
		it("is a string equal to the type of cell (default rock)", () => {
			expect(cell.type).to.equal("rock");
		});
			
	});
	describe(".exits", () => {
		it("is an array with values of exits - north, south, east or west", () => {
			expect(cell.exits).to.be.an("array")
				.with.length(0);
			const exitCell = new Cell(1,1);
			exitCell.createExit("north");
			expect(exitCell.exits).to.be.an("array")
				.with.length(1);
			expect(exitCell.exits[0]).to.equal("north");
			exitCell.createExit("south");
			expect(exitCell.exits).to.be.an("array")
				.with.length(2);
			expect(exitCell.exits[1]).to.equal("south");
		});	
	});
	describe(".isDeadend", () => {
		it("returns true if the cell only has one exit", () => {
			expect(cell.isDeadend()).to.equal(false);
			const deadend = new Cell(1,1);
			deadend.createExit("north");
			expect(deadend.isDeadend()).to.equal(true);
			deadend.createExit("south");
			expect(cell.isDeadend()).to.equal(false);
		});
	});
	describe(".excavate()", () => {
		it("turns the cell type to floor", () => {
			const floor = new Cell(1,1);
			expect(floor.type).to.equal("rock");
			floor.excavate();
			expect(floor.type).to.equal("floor");
		});
	});
	describe(".createExit(dir)", () => {
		it("adds an exit to the .exits array if it doesn't already exist", () => {
			const exitCell = new Cell(1,1);
			expect(exitCell.exits).to.be.an("array")
				.with.length(0);
			exitCell.createExit("north");
			expect(exitCell.exits).to.be.an("array")
				.with.length(1);
			exitCell.createExit("north");
			expect(exitCell.exits).to.be.an("array")
				.with.length(1);
		});
	});
});
