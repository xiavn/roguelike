import { combineReducers } from "redux";
import showHelp from "./helptext";
import saveName from "./playerStats";

const roguelike = combineReducers({
	showHelp,
	saveName
});

export default roguelike;