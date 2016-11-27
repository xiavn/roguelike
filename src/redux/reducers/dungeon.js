import createDungeon from "../../helpers/createDungeon";

export const initialState = createDungeon();

export default function dungeon(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
		}
}