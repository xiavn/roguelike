import React, { Component } from "react";
import {render} from "react-dom";
import {Roguelike from "./roguelike";
require("../main.scss");

render(<Roguelike/>, document.getElementById("app"));