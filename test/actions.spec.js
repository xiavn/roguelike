import {expect} from "chai";

import * as actions from "../src/redux/actions";

describe("actions", () => {
	it("should create an action to display Instructions", () => {
		const expectedAction = {
			type: "SHOW_HELP"
		};

		expect(actions.showHelp()).to.eql(expectedAction);
	});
});

