import Dungeon from "./dungeon-creator/Dungeon"
import { NAME } from "./constants"

export const dungeonBase = new Dungeon()
export const initialState = dungeonBase.map

const dungeonReducer = (state = initialState, action) => {
	switch (action.type) {
	default:
		return state
	}
}

const dungeonMap = state => state[NAME]

export const selectors = {
	dungeonMap
}

export default dungeonReducer