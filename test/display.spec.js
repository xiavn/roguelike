import React from "react";
import { shallow } from "enzyme";
import {expect} from "chai";

import Display from "../src/display/display";
import DungeonInfo from "../src/display/dungeonInfo";
import DungeonMap from "../src/display/map/dungeonMap";
import DungeonLogConnected, {  DungeonLog, DungeonLogMessage } from "../src/display/dungeonLog";
import Dungeon from "../src/display/map/dungeon";
import Stats from "../src/display/stats";

describe("<Display />", () => {
	it("should render DungeonInfo, DungeonLog, DungeonMap & Stats", () => {
		const wrapper = shallow(<Display />);

		expect(wrapper.containsAllMatchingElements([
			<DungeonInfo/>,
			<DungeonMap/>,
			<DungeonLogConnected/>,
			<Stats/>])).to.equal(true);
	});
	describe("<DungeonMap />", () => {
		it("should display a randomly created Dungeon", () => {
			const wrapper = shallow(<DungeonMap />);

			expect(wrapper.containsMatchingElement(
				<Dungeon/>)).to.equal(true);
		});
	});
	describe("<DungeonLog />", () => {
		const props = {
			log: [
				{
					type: "diceRoll",
					message: "strength: 4"
				},
				{
					type: "diceRoll",
					message: "accuracy: 2"
				},
				{
					type: "damage",
					message: "You took 5 slashing damage"
				}
			]
		};
		it("should render a DungeonLogMessage for each message passed in", () => {
			const wrapper = shallow(<DungeonLog {...props} />);
			expect(wrapper.find(DungeonLogMessage)).to.have.length(props.log.length);
		});

		describe("<DungeonLogMessage />", () => {
			it("should render a message", () => {
				const wrapper = shallow(<DungeonLogMessage { ...props.log[0]} />),
					message = props.log[0].message;
				expect(wrapper.html()).to.equal(`<li>${message}</li>`);
			});
		});
	});
});