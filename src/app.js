import React, { Component } from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import roguelike from "./redux/reducers/reducers";
import Roguelike from "./roguelike";
import { showHelp } from "./redux/actions/helptext";
require("../main.scss");

let store = createStore(roguelike);

render(<Roguelike />, document.getElementById("app"));