import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount, shallow } from "enzyme";
import {expect} from "chai";

import reducer from "../src/redux/reducers/helptext";

import ConnectedHelp_Btn, { Header, Title, Help_Btn } from "../src/header";

describe("<Header />", () => {
	it("should render Title & Help_Btn", () => {
		const wrapper = shallow(<Header/>);

		expect(wrapper.containsAllMatchingElements([
			<Title/>,
			<Help_Btn/>])).to.equal(true);
	});
});

describe("<Help_Btn />", () => {
	it("renders a button", () => {
		const wrapper = shallow(<Help_Btn />);

		expect(wrapper.matchesElement(<button>H</button>)).to.equal(true);

	});
	it("updates showHelp: true when clicked", () => {
		const mockStore = configureStore([]);
		const store = mockStore({});
		const wrapper = mount(<Provider store={store}><ConnectedHelp_Btn /></Provider>);

		expect(store.getActions().length).to.eql(0);
		wrapper.find("button").simulate("click");
		expect(store.getActions().length).to.eql(1);
		expect(store.getActions()[0]).to.eql({
			type: "SHOW_HELP",
			display: true
		});	
	});
});