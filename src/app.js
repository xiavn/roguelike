import React, { Component } from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import roguelike from "./redux/reducers/reducers";
import Roguelike from "./roguelike";
import { showHelp } from "./redux/actions/helptext";
require("../main.scss");

let store = createStore(roguelike);

render(
	<Provider store={store}>
		<Roguelike />
	</Provider>,
	document.getElementById("app"));