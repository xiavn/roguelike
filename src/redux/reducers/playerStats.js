import { SAVE_NAME, SAVE_CLASS, CHANGE_LEVEL } from "../actions/actionTypes";
import Character from "../../helpers/characterSetup";


export const character = new Character();

export const initialState = {
	name: "Wheezer the Crazy",
	class: character.class,
	level: character.level,
	health: character.health,
	attributes: character.attributes,
	resource: character.resource,
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
			character.class = action.pClass;
			return { ...state, class: action.pClass };
		case CHANGE_LEVEL:
			character.level = state.level+action.by;
			return {...state, level: character.level,
				health: character.health,
				resource: character.resource };
		default:
			return state;
	}
}