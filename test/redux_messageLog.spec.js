import {expect} from "chai";

import * as actions from "../src/redux/actions/messageLog";
import * as types from "../src/redux/actions/actionTypes";
import * as mTypes from "../src/redux/actions/messageTypes";
import reducer from "../src/redux/reducers/messageLog";

describe("Redux - messageLog", () => {
	let message = {
		type: mTypes.DICE_ROLL,
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
		it("should handle SAVE_CLASS", () => {
			message = {
				type: mTypes.NEW_CLASS,
				text: "Your class is now fighter."
			};
			const pClass = "fighter";
			expect(
				reducer(undefined, {
					type: types.SAVE_CLASS,
					pClass
				})
			).to.eql( [...initialState, message ]);
		});
		it("should handle CHANGE_LEVEL", () => {
			message = {
				type: mTypes.NEW_LEVEL,
				text: "You gained a level!"
			};
			let by = 1;
			expect(
				reducer(undefined, {
					type: types.CHANGE_LEVEL,
					by
				})
			).to.eql( [...initialState, message ]);
			message.text= "You lost a level!";
			by = -1;
			expect(
				reducer(undefined, {
					type: types.CHANGE_LEVEL,
					by
				})
			).to.eql( [...initialState, message ]);
			message.text= "You gained 6 levels!";
			by = 6;
			expect(
				reducer(undefined, {
					type: types.CHANGE_LEVEL,
					by
				})
			).to.eql( [...initialState, message ]);
		});
	});
});