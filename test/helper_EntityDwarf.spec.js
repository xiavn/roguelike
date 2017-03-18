import { expect } from "chai";

import Entity from "../src/helpers/Dungeon/Entity";
import Dwarf from "../src/helpers/Dungeon/EntityDwarf";
import Map from "../src/helpers/Dungeon/Map";
import Maze from "../src/helpers/Dungeon/MapMaze";
import Cell from "../src/helpers/Dungeon/Cell";
import Compass from "../src/helpers/Dungeon/Compass";
import Direction from "../src/helpers/Dungeon/Direction";

describe("Dwarf", () => {
	describe(".dig(dir, length)", () => {
		it("creates an exit in current cell, moves to new cell, excavates, and creates exit", () => {
			const map = new Map(20,20),
				start = map.map[0][1],
				finish =  map.map[0][0],
				dwarf = new Dwarf(map, start);
			dwarf.dig(dwarf.compass.north);
			expect(dwarf.cell).to.eql(finish);
			expect(start.exits).to.eql([dwarf.compass.north]);
			expect(finish.exits).to.eql([dwarf.compass.south]);
			expect(finish.type).to.equal("floor");
		});
		it("carries on in the same direction for the length", () => {
			const map = new Map(20,20);
			const dwarf = new Dwarf(map, map.map[0][0]);
			expect(map.cellsOfType("floor").length).to.eql(0);
			dwarf.dig(dwarf.compass.south,5);
			expect(map.cellsOfType("floor").length).to.eql(5);
			dwarf.dig(dwarf.compass.south,10);
			expect(map.cellsOfType("floor").length).to.eql(15);
		});	
	});
	describe(".digToTunnel()", () => {
		it("digs from a deadend until another tunnel is reached", () => {
			const map = new Map(5,5);
			const dwarf = new Dwarf(map, map.map[0][0]);
			dwarf.dig(dwarf.compass.east, 4);
			dwarf.digToTunnel();
			map.cellsOfType("floor").forEach((cell) => {
				if (cell.location !== [0][0]) {
					expect(cell.exits.length).to.be.above(1);
				}
			});
		});
	});
	describe(".collapse(cell)", () => {
		const map = new Map(20,20),
			dwarf = new Dwarf(map, map.map[0][0]);
		dwarf.dig(dwarf.compass.south, 5);
		dwarf.dig(dwarf.compass.east, 5);
		dwarf.collapse(map.map[0][5]);
		it("moves the dwarf to that cell", () => {
			expect(dwarf.cell).to.equal(map.map[0][5]);
		});
		it("turns the cell to rock", () => {
			expect(dwarf.cell.type).to.equal("rock");
		});
		it("removes the exits in this cell", () => {
			expect(dwarf.cell.exits.length).to.equal(0);
		});
		it("removes the exits in corresponding neighbouring cells", () => {
			expect(map.map[0][4].exits.length).to.equal(1);
			expect(map.map[1][5].exits.length).to.equal(1);
		});
	});
		
	describe.skip("checkRoute(breadcrumbs, blocked, randomness)", () => {
		it("fills every cell in the map with a floor tile", () => {
			const map = new Map(10,10);
			const cell = map.chooseCell();
			const dwarf = new Dwarf(map, cell);
			dwarf.checkRoute();
			expect(map.cellsOfType("floor").length).to.equal(10*10);
		});
	});
	describe("collapseDeadEnds(count)", () => {
		it("collapses all the deadEnds on the map", () => {
			const map = new Map(10,10);
			const dwarf = new Dwarf(map, map.map[0][0]);
			dwarf.dig(dwarf.compass.south);
			expect(map.deadEnds.length).to.eql(2);
			dwarf.collapseDeadEnds();
			expect(map.deadEnds.length).to.eql(0);
		});
		it("collapses all deadends a time equal to count", () => {
			const map = new Map(10,10);
			const dwarf = new Dwarf(map, map.map[0][0]);
			dwarf.dig(dwarf.compass.south, 4);
			expect(map.deadEnds.length).to.eql(2);
			dwarf.collapseDeadEnds(2);
			expect(map.deadEnds.length).to.eql(0);
		});
	});
	describe("connectDeadEnds(chance)", () => {
		it("removes dead ends by connecting them to an existing corridor", () => {
			const map = new Map(10,10);
			const dwarf = new Dwarf(map, map.map[0][0]);
			dwarf.dig(dwarf.compass.south, 5);
			expect(map.deadEnds.length).to.equal(2);
			dwarf.connectDeadEnds();
			expect(map.deadEnds.length).to.equal(0);
		});	
	});
});
