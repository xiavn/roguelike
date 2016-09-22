import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import InstructionsConnected, { Instructions } from "../src/instructions";

describe("<Instructions />", () => {
	it("should display based on if shouldDisplay prop = true / false", () => {
		let props = {
			shouldDisplay: false
		};
		const wrapper = shallow(<Instructions {...props} />);

		expect(wrapper.hasClass("hidden")).to.equal(true);
		wrapper.setProps({shouldDisplay: true});
		expect(wrapper.hasClass("visible")).to.equal(true);
	});
});