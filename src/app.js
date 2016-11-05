import React, { Component } from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import roguelike from "./redux/reducers/reducers";
import Roguelike from "./roguelike";
require("../main.scss");

let store = createStore(roguelike, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
	<Provider store={store}>
		<Roguelike />
	</Provider>,
	document.getElementById("app"));