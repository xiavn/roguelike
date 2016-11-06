import { expect } from "chai";

import diceRoller from "../src/helpers/dice";

describe("diceRoller()", () => {
	it("should return the value of a given single dice roll", () => {
		const roll1 = "d8",
			roll2 = "1d6",
			roll3 = "2d4",
			roll4 = "2d8 + 4",
			roll5 = "1d10 - 2",
			roll6 = "1d4 + 1d6",
			roll7 = "(2d6 - 4) * 2";
		expect(diceRoller(roll1)).to.be.within(1,8);
		expect(diceRoller(roll2)).to.be.within(1,6);
		expect(diceRoller(roll3)).to.be.within(2,8);
		expect(diceRoller(roll4)).to.be.within(6,20);
		expect(diceRoller(roll5)).to.be.within(-1,8);
		expect(diceRoller(roll6)).to.be.within(2,10);
		expect(diceRoller(roll7)).to.be.within(-4,16);
	});
	it("should return the value of multiple dice rolls added together", () => {
		const roll1 = "d8 + d10",
			roll2 = "2d4 + 1d6",
			roll3 = "d8 + 3d4",
			roll4 = "2d10 - 1d4",
			roll5 = "(2d4 - 1) * 1d2";
		expect(diceRoller(roll1)).to.be.within(2,18);
		expect(diceRoller(roll2)).to.be.within(3,14);
		expect(diceRoller(roll3)).to.be.within(4,20);
		expect(diceRoller(roll4)).to.be.within(-2,24);
		expect(diceRoller(roll5)).to.be.within(1,14);
	});
});