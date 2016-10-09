import { SAVE_NAME, SAVE_CLASS, CHANGE_LEVEL } from "../actions/actionTypes";
import character from "../../helpers/characterSetup";

export const initialState = {
	name: "Wheezer the Crazy",
	class: character.class,
	level: 1,
	health: {
		total: 0,
		current: 0
	},
	resource: {
		type: character.resource,
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
	case SAVE_CLASS:
		return { ...state, class: action.pClass };
	case CHANGE_LEVEL:
		return {...state, level: state.level+action.by };

	default:
		return state;

	}
}