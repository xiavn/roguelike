import React from "react";
import { shallow } from "enzyme";
import {expect} from "chai";

import DungeonMap from "../src/display/map/dungeonMap";
import Dungeon from "../src/display/map/dungeon";

describe("<DungeonMap />", () => {
	it("should display a randomly created Dungeon", () => {
		const wrapper = shallow(<DungeonMap />);

		expect(wrapper.containsMatchingElement(
			<Dungeon/>)).to.equal(true);
	});
});