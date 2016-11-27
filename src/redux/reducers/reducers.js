import { combineReducers } from "redux";
import showHelp from "./helptext";
import playerStats from "./playerStats";
import messageLog from "./messageLog";
import dungeon from "./dungeon";

const roguelike = combineReducers({
	showHelp,
	playerStats,
	messageLog,
	dungeon
});

export default roguelike;