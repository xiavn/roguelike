import { expect } from "chai";

import Map from "../src/helpers/Dungeon/Map";
import Compass from "../src/helpers/Dungeon/Compass";
import Cell from "../src/helpers/Dungeon/Cell";

describe("Map", () => {
	const map = new Map(20,30);
	describe(".width & .height", () => {
		it("is a number", () => {
			expect(map.width).to.be.a("number");
			expect(map.height).to.be.a("number");
		});	
	});
	describe(".compass", () => {
		it("is an instance of Compass", () => {
			expect(map.compass).to.be.an.instanceOf(Compass);
		});
	});
	describe(".cellsOfType", () => {
		it("takes a type of cell and returns an array of matching cells", () => {
			expect(map.cellsOfType("rock")).to.be.an("array")
				.to.have.length(600);
			expect(map.cellsOfType("rock")[5].type).to.equal("rock");
			expect(map.cellsOfType("floor")).to.have.length(0);
		});		
	});
	describe(".isInside(direction, cell)", () => {
		it("returns true if the co-ordinates are inside the map", () => {
			expect(map.isInside(map.compass.north,map.map[1][7])).to.equal(true);
			expect(map.isInside(map.compass.north,map.map[12][23])).to.equal(true);
		});
		it("returns false if the co-ordinates are outside the map", () => {
			expect(map.isInside(map.compass.north,map.map[0][0])).to.equal(false);
			expect(map.isInside(map.compass.south,map.map[0][29])).to.equal(false);
		});
	});
	describe(".isType(type,direction, cell)", () => {
		it("returns true if the cell at the co-ordinates matches the type", () => {
			expect(map.isType("rock",map.compass.north,map.map[1][1])).to.equal(true);
			expect(map.isType("rock",map.compass.north,map.map[17][27])).to.equal(true);
		});
		it("returns false if cell at co-ordinates does not match type", () => {
			expect(map.isType("floor",map.compass.north,map.map[1][7])).to.equal(false);
			expect(map.isType("floor",map.compass.north,map.map[11][17])).to.equal(false);
		});
	});
	describe(".createStartMap()", () => {
		it("returns an array of columns", () => {
			expect(map.createStartMap()).to.be.an("array")
				.to.have.lengthOf(20);
			describe("each column", () => {
				it("should be an array of rows", () => {
					map.createStartMap().forEach((row) => {
						expect(row).to.be.an("array")
							.to.have.lengthOf(30);
					});
					describe("each row should contain an array of Cells", () => {
						map.createStartMap().forEach((row) => {
							row.forEach((cell) => {
								expect(cell).to.be.an.instanceOf(Cell);
							});
						});
					});	
				});
			});
		});
	});
	describe(".chooseCell(list)", () => {
		it("should pick a cell from the map if not provided with a list", () => {
			expect(map.chooseCell()).to.be.an.instanceOf(Cell);
		});
		it("should pick a cell from a list", () => {
			const floorMap = new Map(6,6);
			floorMap.map[0][0].type = "floor";
			floorMap.map[1][1].type = "floor";
			expect(floorMap.chooseCell(floorMap.cellsOfType("floor"))).to.be.an.instanceOf(Cell)
				.with.property("type","floor");
		});	
	});
		
});