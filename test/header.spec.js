import React from "react";
import { mount, shallow } from "enzyme";
import {expect} from "chai";
import { spy } from "sinon";

import Header, { Title, Help_Btn } from "../src/header";

describe("<Header />", () => {
	it("should render Title & Help_Btn", () => {
		const wrapper = shallow(<Header/>);

		expect(wrapper.containsAllMatchingElements([
			<Title/>,
			<Help_Btn/>])).to.equal(true);
	});
});

describe("<Help_Btn />", () => {
	it("should make <Instructions /> visible when clicked", () => {
		const wrapper = shallow(<Help_Btn />),
		wrapper.find("button").simulate("click");

		expect(InstructionsDisplay state).to.equal(true);
	});
});