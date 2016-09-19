import * as types from "./actionTypes";

export const showHelp = (display) => {
	return {
		type: types.SHOW_HELP,
		display
	};
};