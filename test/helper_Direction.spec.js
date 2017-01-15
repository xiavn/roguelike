import { expect } from "chai";

import Direction from "../src/helpers/Dungeon/Direction";

describe("Direction", () => {
	const north = new Direction("north");
	describe(".name", () => {
		it("is a string with the name of the direction", () => {
			expect(north.name).to.equal("north");
		});
	});
	describe(".opposite", () => {
		it("is a string with the name of the opposite direction", () => {
			expect(north.opposite).to.equal("south");
		});
			
	});
	describe(".location", () => {
		it("it is an array with the x,y co-ordinate difference", () => {
			expect(north.location).to.be.an("array")
				.with.length(2);
			expect(north.location).to.eql([0, -1]);
		});	
	});
});
