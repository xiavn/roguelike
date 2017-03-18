import React from "react";
import { shallow } from "enzyme";
import {expect} from "chai";

import { Dungeon, Column, Cell } from "../src/display/map/dungeon";
import HDungeon, {dHeight, dWidth} from "../src/helpers/createDungeon";

describe("<Dungeon />", () => {
	const dungeon = new HDungeon();
	it("should display <Columns /> equal to the height of the dungeon", () => {
		let props = {
			dungeon: dungeon.map
		};
		const wrapper = shallow(<Dungeon { ...props } />);
		expect(wrapper.find(Column)).to.have.length(dHeight);

		describe("<Columns />", () => {
			it("should display <Cells /> equal to the width of the dungeon", () => {
				props = {
					column: dungeon.map[0]
				};
				const wrapper = shallow(<Column { ...props } />);
				expect(wrapper.find(Cell)).to.have.length(dWidth);
			});
		});
	});
});