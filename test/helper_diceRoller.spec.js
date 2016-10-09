import { expect } from "chai";

import diceRoller from "../src/helpers/dice";

describe("diceRoller()", () => {
	it("should return the value of a given single dice roll", () => {
		const roll = "d8";
		 expect(diceRoller(roll)).to.be.within(1,8);
	});
});