import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import { Roguelike } from "../src/roguelike";

describe("<Roguelike/>", () => {
	it("should render Header, Footer, Instructions and Display", () => {
		const wrapper = shallow(<Roguelike/>);

		expect(wrapper.containsAllMatchingElements([
			<Header/>,
			<Instructions/>,
			<Display/>,
			<Footer/>])).to.equal(true);
	});
});