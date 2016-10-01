import * as types from "./actionTypes";

export const saveName = (name) => {
	return {
		type: types.SAVE_NAME,
		name
	};
};