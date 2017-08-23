import DungeonMap from "./MapMaze"

export default class Dungeon {
	constructor(width = 30, height = 30) {
		this._map = new DungeonMap(width, height)
		//this._map.createMaze()
	}

	get map() {
		return this._map.map
	}
}