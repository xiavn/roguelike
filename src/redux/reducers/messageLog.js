import { SEND_MESSAGE, SAVE_CLASS } from "../actions/actionTypes";

export default function messageLog(state = [], action) {
	switch (action.type) {
	case SEND_MESSAGE:
		return [...state,action.message];
	case SAVE_CLASS:
		const message = {
			type: "newClass",
			text: `Your class is now ${action.pClass}`
		};
		return [ ...state, message ];
	default:
		return state;
	}
}