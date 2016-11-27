//Defaults
export const dHeight = 40;
export const dWidth = 40;

const createDungeon = (width = dWidth, height = dHeight) => {
	let dungeon = [];

	for (let i = 0; i < width; i++) {
		dungeon.push([]);
	}

	dungeon.forEach((column) => {
		for (let i = 0; i < height; i++) {
			column.push({
				type: "wall"
			});
		}
	});

	return dungeon;
};

export default createDungeon;