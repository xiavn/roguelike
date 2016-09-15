import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Header, { Title, Help_Btn } from "../src/header";

describe("<Header/>", () => {
	it("should render Title & Help_Btn", () => {
		const wrapper = shallow(<Header/>);

		expect(wrapper.containsAllMatchingElements([
			<Title/>,
			<Help_Btn/>])).to.equal(true);
	});
});