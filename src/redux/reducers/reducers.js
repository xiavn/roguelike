import { combineReducers } from "redux";
import showHelp from "./helptext";
import playerStats from "./playerStats";
import messageLog from "./messageLog";

const roguelike = combineReducers({
	showHelp,
	playerStats,
	messageLog
});

export default roguelike;