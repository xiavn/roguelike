import { SEND_MESSAGE } from "../action-types";

export const sendMessage = message => ({
	type: SEND_MESSAGE,
	message
})