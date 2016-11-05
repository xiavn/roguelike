import { SEND_MESSAGE } from "../actions/actionTypes";

export default function messageLog(state = [], action) {
	switch (action.type) {
	case SEND_MESSAGE:
		return [...state,action.message];
	default:
		return state;
	}
}