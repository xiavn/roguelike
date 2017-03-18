import { expect } from "chai";

import Compass from "../src/helpers/Dungeon/Compass";
import Direction from "../src/helpers/Dungeon/Direction";

describe("Compass", () => {
	const compass = new Compass();
	describe(".directions", () => {
		it("is an array of string directions", () => {
			expect(compass.directions).to.eql(["north", "south", "east", "west"]);
		});
	});
	describe(".[direction]", () => {
		it("is an instance of Direction", () => {
			expect(compass.north).to.be.an.instanceOf(Direction);
		});
			
	});
	describe(".spin", () => {
		it("returns a random direction on the compass", () => {
			expect(compass.spin()).to.be.oneOf([compass.north, compass.south, compass.east, compass.west]);
		});
		it("takes an array of directions to ignore", () => {
			expect(compass.spin([compass.north, compass.east, compass.west])).to.eql(compass.south);
		});
	});
		
});
