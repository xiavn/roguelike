import {expect} from "chai";

import * as actions from "../src/redux/actions/messageLog";
import * as types from "../src/redux/actions/actionTypes";
import reducer from "../src/redux/reducers/messageLog";

describe("Redux - messageLog", () => {
	const message = {
		type: "diceRoll",
		text: "strength: 4"
	},
		initialState = [];
	describe("Action Creators", () => {
		describe("sendMessage", () => {
			it("should create an action to send a message to the log", () => {
				const expectedAction = {
					type: types.SEND_MESSAGE,
					message
				};

				expect(actions.sendMessage(message)).to.eql(expectedAction);
			});
		});
	});

	describe("Reducer", () => {
		it("should return the initial state", () => {
			expect(
				reducer(undefined, {})
			).to.eql(initialState);
		});

		it("should handle SEND_MESSAGE", () => {
			expect(
				reducer(undefined, {
					type: types.SEND_MESSAGE,
					message
				})
			).to.eql( [...initialState, message ]);
		});
	});
});