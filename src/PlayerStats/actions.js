import { SAVE_NAME, SAVE_CLASS, CHANGE_LEVEL } from "../action-types";

export const saveName = name => ({
	type: SAVE_NAME,
	name
})

export const saveClass = pClass => ({
	type: SAVE_CLASS,
	pClass
})

export const increaseLevel = by => ({
	type: CHANGE_LEVEL,
	by
})