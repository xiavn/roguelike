import { expect } from "chai";

import Entity from "../src/helpers/Dungeon/Entity";
import Dwarf from "../src/helpers/Dungeon/EntityDwarf";
import Map from "../src/helpers/Dungeon/Map";
import Maze from "../src/helpers/Dungeon/MapMaze";
import Cell from "../src/helpers/Dungeon/Cell";
import Compass from "../src/helpers/Dungeon/Compass";
import Direction from "../src/helpers/Dungeon/Direction";

describe("Dwarf", () => {
	describe(".dig(dir)", () => {
		it("creates an exit in current cell, moves to new cell, excavates, and creates exit", () => {
			const map = new Map(20,20);
			const cell = map.chooseCell();
			const dwarf = new Dwarf(map, cell);

			const start = map.map[0][1],
				finish =  map.map[0][0];
			dwarf.cell = start;
			dwarf.direction = dwarf.compass.north;
			dwarf.dig();
			expect(dwarf.cell).to.eql(finish);
			expect(start.exits).to.eql([dwarf.compass.north]);
			expect(finish.exits).to.eql([dwarf.compass.south]);
			expect(finish.type).to.equal("floor");
		});
	});
	describe("checkRoute(breadcrumbs, blocked, randomness)", () => {
		it("fills every cell in the map with a floor tile", () => {
			const map = new Map(10,10);
			const cell = map.chooseCell();
			const dwarf = new Dwarf(map, cell);
			dwarf.checkRoute();
			expect(map.cellsOfType("floor").length).to.equal(10*10);
		});
			
	});
		
});
