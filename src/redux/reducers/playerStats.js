import { SAVE_NAME } from "../actions/actionTypes";

export const initialState = {
	name: "",
	class: "fighter",
	level: 1,
	health: {
		total: 0,
		current: 0
	},
	resource: {
		type: "rage",
		total: 0,
		current: 0
	},
	inventory: [
		{
			name: "Health Potion",
			value: 5
		},
	],
	abilities: [
		{
			name: "Whirlwind",
			value: 5
		}
	]
};

export default function playerStats(state = initialState , action) {
	switch (action.type) {
	case SAVE_NAME:
		return  { ...state, name: action.name };
	default:
		return state;
	}
}