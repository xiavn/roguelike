import {expect} from "chai";

import * as actions from "../src/redux/actions/helptext";
import * as types from "../src/redux/actions/actionTypes";
import reducer from "../src/redux/reducers/helptext";

describe("Redux - showHelp", () => {
	describe("showHelp", () => {
		it("should create an action to display or hide Instructions", () => {
			const display = true;
			const expectedAction = {
				type: types.SHOW_HELP,
				display
			};

			expect(actions.showHelp(display)).to.eql(expectedAction);
		});
	});

	describe("showHelp reducer", () => {
		it("should return the initial state", () => {
			expect(
				reducer(undefined, {})
			).to.eql(false);
		});

		it("should handle SHOW_HELP", () => {
			expect(
				reducer(false, {
					type: types.SHOW_HELP,
					display: true
				})
			).to.eql(true);
		});
	});
});

