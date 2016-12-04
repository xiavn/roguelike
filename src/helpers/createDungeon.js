//Defaults
export const dHeight = 40;
export const dWidth = 40;

export default class Dungeon {

}

export class DungeonMap {
	constructor(width = dWidth, height = dHeight) {
		this.width = width;
		this.height = height;
	}
	get map() {
		let map = [];

		for (let i = 0; i < this.width; i++) {
			map.push([]);
		}

		map.forEach((column) => {
			for (let i = 0; i < this.height; i++) {
				column.push({
					type: "wall"
				});
			}
		});

		return map;
	}
}