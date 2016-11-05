import * as types from "./actionTypes";

export const sendMessage = (message) => {
	return {
		type: types.SEND_MESSAGE,
		message
	};
};