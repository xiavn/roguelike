import * as types from "./actionTypes";

export const saveName = (name) => {
	return {
		type: types.SAVE_NAME,
		name
	};
};

export const saveClass = (pClass) => {
	return {
		type: types.SAVE_CLASS,
		pClass
	};
};

export const increaseLevel = (by) => {
	return {
		type: types.CHANGE_LEVEL,
		by
	};
};