import React from "react";
import { shallow } from "enzyme";
import {expect} from "chai";

import PlayerStats, { StatsSubList, PlayerStatsList } from "../src/display/playerStats";

describe("<PlayerStatsList />", () => {
	const playerStats = {
			name: "Vincent the Unready",
			class: "mage",
			level: 1,
			health: {
				total: 12,
				current: 4
			},
			resource: {
				type: "mana",
				total: 6,
				current: 3
			},
			inventory: [
				{
					name: "Health Potion",
					value: 5
				},
				{
					name: "Yew Wand",
					value: 1
				},
				{
					name: "Magic Ring of Floating",
					value: 1
				}
			],
			abilities: [
				{
					name: "Whirlwind",
					value: 5
				}
			]
		},
		playerStatItems = Object.getOwnPropertyNames(playerStats);

	const wrapper = shallow(<PlayerStatsList playerStats={playerStats} />),
		listItems = wrapper.children();
	it("should display an unordered list containing player stats", () => {
		expect(wrapper.is("ul")).to.equal(true);
		expect(listItems.length).to.equal(playerStatItems.length);
	});
	it("should give a key to each item in the list", () => {
		listItems.forEach((item, index) => {
			let key = playerStatItems[index];
			expect(item.key()).to.equal(key);
		});
	});
	it("should contain two sub lists - inventory and abilities", () => {
		expect(wrapper.find(StatsSubList)).to.have.length(2);
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