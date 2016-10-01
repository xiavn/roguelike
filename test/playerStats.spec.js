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
					item: "Health Potion",
					amount: 5
				},
				{
					item: "Yew Wand",
					amount: 1
				},
				{
					item: "Magic Ring of Floating",
					amount: 1
				}
			],
			abilities: [
				{
					name: "Whirlwind",
					cooldown: 5
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
});