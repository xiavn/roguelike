import { SHOW_HELP } from "../actions/actionTypes";

export default function showHelp(state = false, action) {
	switch (action.type) {
	case SHOW_HELP:
		return  action.display;
	default:
		return state;
	}
}