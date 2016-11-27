import { expect } from "chai";

import createDungeon, {dHeight, dWidth} from "../src/helpers/createDungeon";

describe("createDungeon()", () => {
	it("returns an array of columns", () => {
		expect(createDungeon()).to.be.an("array")
			.to.have.lengthOf(dWidth);
		expect(createDungeon(10,10)).to.be.an("array")
			.to.have.lengthOf(10);

		describe("each column", () => {
			it("should be an array of cells", () => {
				const dungeon = createDungeon();
				dungeon.forEach((column) => {
					expect(column).to.be.an("array")
						.to.have.lengthOf(dHeight);
				});
				const bigDungeon = createDungeon(100,100);
				bigDungeon.forEach((column) => {
					expect(column).to.be.an("array")
						.to.have.lengthOf(100);
				});

				describe("each cell", () => {
					it("should be an object, with a type", () => {
						dungeon.forEach((column) => {
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