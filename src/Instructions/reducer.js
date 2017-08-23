import { SHOW_INSTRUCTIONS } from "../action-types";
import { NAME } from "./constants"

const instructionsReducer = (state = false, action) => {
	switch (action.type) {
	case SHOW_INSTRUCTIONS:
		return  action.display;
	default:
		return state;
	}
}

const showInstructions = state => state[NAME]

export const selectors = {
	showInstructions
}

export default instructionsReducer