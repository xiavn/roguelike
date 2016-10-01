import { SAVE_NAME } from "../actions/actionTypes";

const initialState = {
	name: "",
	class: "",
	level: 1,
	health: {
		total: 0,
		current: 0
	},
	resource: {
		type: "mana",
		total: 6,
		current: 3
	},
	inventory: [],
	abilities: []
}

export default function playerStats(state = initialState , action) {
	switch (action.type) {
	case SAVE_NAME:
		return  action.name;
	default:
		return state;
	}
}