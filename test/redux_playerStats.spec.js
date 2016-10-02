import {expect} from "chai";

import * as actions from "../src/redux/actions/playerStats";
import * as types from "../src/redux/actions/actionTypes";
import reducer from "../src/redux/reducers/playerStats";
import { initialState } from "../src/redux/reducers/playerStats";

describe("saveName", () => {
	it("should create an action to save the player's name", () => {
		const name = "Rager the Bold";
		const expectedAction = {
			type: types.SAVE_NAME,
			name
		};

		expect(actions.saveName(name)).to.eql(expectedAction);
	});
});

describe("playerStats reducer", () => {
	it("should return the initial state", () => {
		expect(
			reducer(undefined, {})
		).to.eql(initialState);
	});

	it("should handle SAVE_NAME", () => {
		expect(
			reducer(undefined, {
				type: types.SAVE_NAME,
				name: "Rager the Bold"
			})
		).to.eql( { ...initialState, name: "Rager the Bold" });
	});
});