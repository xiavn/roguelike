import React from "react";
import { shallow } from "enzyme";
import {expect} from "chai";

import PlayerStats from "../src/display/playerStats";

describe("<PlayerStats />", () => {
	const playerStats = {
			name: "Vincent the Unready",
			class: "Wizard",
			level: "1",
			health: {
				total: 12,
				current: 4
			},
			resource: {
				type: "mana",
				total: "6",
				current: "3"
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
			]
		},
		playerStatItems = Object.getOwnPropertyNames(playerStats);

	const wrapper = shallow(<PlayerStats playerStats={playerStats} />),
		listItems = wrapper.children();
	it("should display an unordered list containing player stats", () => {
		expect(wrapper.is("ul")).to.equal(true);
		expect(listItems.length).to.equal(playerStatItems.length);
	});
	it("should give a key to each item in the list", () => {
		//tems.forEach
	});
});