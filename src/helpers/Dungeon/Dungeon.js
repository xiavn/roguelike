import DungeonMap from "./MapMaze";

export default class Dungeon {
	constructor(width = 40, height = 40) {
		this._map = new DungeonMap(width, height);
		//this._map.createMaze();
	}

	get map() {
		return this._map.map;
	}
}