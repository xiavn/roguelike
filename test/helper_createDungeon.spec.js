import { expect } from "chai";

import Dungeon, { DungeonMap, Cell, dHeight, dWidth} from "../src/helpers/createDungeon";

const dungeon = new Dungeon();

describe("Dungeon", () => {
	describe("_map", () => {
		it("contains an instance of DungeonMap", () => {
			expect(dungeon._map).to.be.an.instanceOf(DungeonMap);
		});
	});
});

const dungeonMap = new DungeonMap(),
	dungeonMapCustom = new DungeonMap(75, 30);

describe("DungeonMap", () => {
	describe(".map", () => {
		let map = dungeonMap.map,
			customMap = dungeonMapCustom.map;
		it("returns an array of columns", () => {
			expect(map).to.be.an("array")
				.to.have.lengthOf(dWidth);
			expect(customMap).to.be.an("array")
				.to.have.lengthOf(75);

			describe("each column", () => {
				it("should be an array of cells", () => {
					map.forEach((column) => {
						expect(column).to.be.an("array")
							.to.have.lengthOf(dHeight);
					});
					customMap.forEach((column) => {
						expect(column).to.be.an("array")
							.to.have.lengthOf(30);
					});

					describe("each cell", () => {
						const cell = dungeonMap.chooseCell();
						it("should have a type", () => {
							expect(cell).to.have.property("type")
								.that.is.a("string");
						});
						it("should have a visited key", () => {
							expect(cell).to.have.property("visited")
								.that.is.a("boolean");
						});
						it("should have a location", () => {
							expect(cell).to.have.property("location")
								.that.is.an("array");
							expect(map[0][0].location).to.eql([0,0]);
							expect(map[10][20].location).to.eql([10,20]);
						});
					});
				});
			});
		});
	});
	describe(".chooseCell()", () => {
		it("should select a random cell", () => {
			expect(dungeonMap.chooseCell()).to.be.an.instanceOf(Cell);
		});
	});
	describe(".visit()", () => {
		it("should visit a randomly selected starting cell", () => {

		});
	});
});