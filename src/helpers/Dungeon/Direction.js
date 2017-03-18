export default class Direction {
	constructor(dir) {
		this.name = dir;
	}

	get opposite() {
		switch(this.name) {
		case "north":
			return "south";
		case "south":
			return "north";
		case "east":
			return "west";
		case "west":
			return "east";
		}
	}

	get location() {
		switch(this.name) {
		case "north":
			return [0, -1];
		case "south":
			return [0, +1];
		case "east":
			return [+1, 0];
		case "west":
			return [-1, 0];
		}
	}
}

