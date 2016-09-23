import React from "react";
import { shallow } from "enzyme";
import {expect} from "chai";

import Display from "../src/display/display";
import DungeonInfo from "../src/display/dungeonInfo";
import DungeonMap from "../src/display/map/dungeonMap";
import Stats from "../src/display/stats";

describe("<Display />", () => {
	it("should render DungeonInfo, DungeonMap & Stats", () => {
		const wrapper = shallow(<Display />);

		expect(wrapper.containsAllMatchingElements([
			<DungeonInfo/>,
			<DungeonMap/>,
			<Stats/>])).to.equal(true);
	});
});