import {expect} from "chai";

import * as actions from "../src/redux/actions/playerStats";
import * as types from "../src/redux/actions/actionTypes";
import reducer from "../src/redux/reducers/playerStats";

describe("saveName", () => {
	it("should create an action to save the player's name", () => {
		const text = "Rager the Bold";
		const expectedAction = {
			type: types.SAVE_NAME,
			text
		};

		expect(actions.saveName(text)).to.eql(expectedAction);
	});
});

describe("saveName reducer", () => {
	it("should return the initial state", () => {
		expect(
			reducer(undefined, {})
		).to.eql(false);
	});

	it("should handle SAVE_NAME", () => {
		expect(
			reducer(false, {
				type: types.SAVE_NAME,
				name: "Rager the Bold"
			})
		).to.eql("Rager the Bold");
	});
});