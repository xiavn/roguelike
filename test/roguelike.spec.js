import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Roguelike from "../src/roguelike";
import Header from "../src/header";
import Instructions from "../src/instructions";
import Display from "../src/display";
import Footer from "../src/footer";

describe("<Roguelike/>", () => {
	it("should render Header, Footer, Instructions and Display", () => {
		const wrapper = shallow(<Roguelike/>);

		expect(wrapper.containsAllMatchingElements([
			<Header />,
			<Instructions />,
			<Display />,
			<Footer />])).to.equal(true);
	});
});