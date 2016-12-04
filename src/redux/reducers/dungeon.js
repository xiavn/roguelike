import Dungeon from "../../helpers/createDungeon";

export const dungeonBase = new Dungeon();

export const initialState = dungeonBase.map;

export default function dungeon(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
		}
}