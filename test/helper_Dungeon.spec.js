import { expect } from "chai";

import Dungeon from "../src/helpers/Dungeon/Dungeon";
import Map from "../src/helpers/Dungeon/Map";

const dungeon = new Dungeon();

describe("Dungeon", () => {
	describe("_map", () => {
		it("contains an instance of Map", () => {
			expect(dungeon._map).to.be.an.instanceOf(Map);
		});
	});
	describe(".map", () => {
		it("returns the .map array of a Map", () => {
			expect(dungeon.map).to.be.an("array");
		});
	});
});