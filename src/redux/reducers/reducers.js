import { combineReducers } from "redux";
import showHelp from "./helptext";
import playerStats from "./playerStats";

const roguelike = combineReducers({
	showHelp,
	playerStats
});

export default roguelike;