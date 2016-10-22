import React from "react";
import { mount, shallow } from "enzyme";
import {expect} from "chai";

import PlayerStats, { StatsSubList, PlayerStatsList } from "../src/display/playerStats";
import { initialState } from "../src/redux/reducers/playerStats";

describe("<PlayerStatsList />", () => {
	const playerStats = initialState,
		playerStatItems = Object.getOwnPropertyNames(playerStats),
		wrapper = shallow(<PlayerStatsList playerStats={playerStats} />),
		listItems = wrapper.children();

	it("should display an unordered list containing player stats", () => {
		expect(wrapper.is("ul")).to.equal(true);
		expect(listItems.length).to.equal(playerStatItems.length);
	});
	describe("li", () => {
		it("should have a key naming the stat", () => {
			listItems.forEach((item, index) => {
				let key = playerStatItems[index];
				expect(item.key()).to.equal(key);
			});
		});
		describe("<StatsSubList />", () => {
			it("should output a list of stats from an array of objects", () => {
				const stat = playerStats.abilities;
				const wrapper = shallow(<StatsSubList stat={stat} />),
					listItems = wrapper.children();

				expect(wrapper.is("ul")).to.equal(true);
				expect(listItems.length).to.equal(stat.length);
			});
		});
	});
});