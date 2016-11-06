import { SEND_MESSAGE, SAVE_CLASS, CHANGE_LEVEL } from "../actions/actionTypes";
import * as mTypes from "../actions/messageTypes";

export default function messageLog(state = [], action) {
	let message = {
		type: "",
		text: ""
	};
	switch (action.type) {
	case SEND_MESSAGE:
		return [...state,action.message];
	case SAVE_CLASS:
		message.type = mTypes.NEW_CLASS;
		message.text = `Your class is now ${action.pClass}.`;
		return [ ...state, message ];
	case CHANGE_LEVEL:
		if (action.by === 0) {
			return state;
		} else {
			const levels = action.by === 1 || action.by === -1 ? "a level" : `${action.by} levels`;
			const direction = action.by > 0 ? "gained" : "lost";
			message.text = `You ${direction} ${levels}!`;
		}
		message.type = mTypes.NEW_LEVEL;
		return [ ...state, message ];
	default:
		return state;
	}
}