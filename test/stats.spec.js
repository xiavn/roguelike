import React from "react";
import { shallow } from "enzyme";
import {expect} from "chai";

import Stats from "../src/display/stats";
import PlayerStats from "../src/display/playerStats";
import EnemyStats from "../src/display/enemyStats";

describe("<Stats />", () => {
	it("should display PlayerStats & EnemyStats", () => {
		const wrapper = shallow(<Stats/>);

		expect(wrapper.containsAllMatchingElements([
			<PlayerStats/>,
			<EnemyStats/>])).to.equal(true);
	});
});