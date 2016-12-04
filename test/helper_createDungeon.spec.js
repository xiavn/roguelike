import { expect } from "chai";

import Dungeon, { DungeonMap, dHeight, dWidth} from "../src/helpers/createDungeon";

const dungeon = new Dungeon();

describe("Dungeon", () => {

});

const dungeonMap = new DungeonMap(),
	dungeonMapCustom = new DungeonMap(75, 30);

describe("DungeonMap", () => {
	describe(".map", () => {
		it("returns an array of columns", () => {
			let map = dungeonMap.map,
				customMap = dungeonMapCustom.map;
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
						it("should be an object, with a type", () => {
							map.forEach((column) => {
								column.forEach((cell) => {
									expect(cell).to.have.keys("type");
								});
							});
						});
					});
				});
			});
		});
	});
});