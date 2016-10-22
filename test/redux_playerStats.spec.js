import {expect} from "chai";

import * as actions from "../src/redux/actions/playerStats";
import * as types from "../src/redux/actions/actionTypes";
import reducer from "../src/redux/reducers/playerStats";
import { initialState } from "../src/redux/reducers/playerStats";


describe("Redux - playerStats", () => {
	describe("Action Creators", () => {
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

		describe("saveClass", () => {
			it("should create an action to save the player's class", () => {
				const pClass = "Rager the Bold";
				const expectedAction = {
					type: types.SAVE_CLASS,
					pClass
				};

				expect(actions.saveClass(pClass)).to.eql(expectedAction);
			});
		});

		describe("increaseLevel", () => {
			it("should create an action make the player go up a level", () => {
				const by = 1;
				const expectedAction = {
					type: types.CHANGE_LEVEL,
					by
				};

				expect(actions.increaseLevel(by)).to.eql(expectedAction);
			});
		});
	});

	describe("playerStats reducer", () => {
		it("should return the initial state", () => {
			expect(
				reducer(undefined, {})
			).to.eql(initialState);
		});

		it("should handle SAVE_NAME, SAVE_CLASS, INCREASE_LEVEL", () => {
			expect(
				reducer(undefined, {
					type: types.SAVE_NAME,
					name: "Rager the Bold"
				})
			).to.eql( { ...initialState, name: "Rager the Bold" });
			expect(
				reducer(undefined, {
					type: types.SAVE_CLASS,
					pClass: "mage"
				})
			).to.eql( { ...initialState, class: "mage" });
			let initialLevel = initialState.level;
			expect(
				reducer(undefined, {
					type: types.CHANGE_LEVEL,
					by: 1
				})
			).to.eql( { ...initialState, level:  initialLevel+1});
		});
	});
});

