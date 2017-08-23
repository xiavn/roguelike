import { combineReducers } from "redux"
import { insReducer, insConsts } from "./Instructions"
import { psReducer, psConstants } from "./PlayerStats"
import { logReducer, logConstants } from "./DungeonLog";
// import dungeon from "./dungeon";

const rootReducer = combineReducers({
	[insConsts.NAME]: insReducer,
	[psConstants.NAME]: psReducer,
	[logConstants.NAME]: logReducer
	// dungeon
});

export default rootReducer;