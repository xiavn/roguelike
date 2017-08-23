import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./root-reducer";
import Roguelike from "./Roguelike";
import "./main.css";

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
	<Provider store={store}>
		<Roguelike />
	</Provider>,
	document.getElementById("root"));
