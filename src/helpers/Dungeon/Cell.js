export default class Cell {
	constructor(x, y) {
		this.location = [x, y];
		this.type = "rock";
		this.exits = [];
	}

	isDeadend() {
		return this.exits.length === 1 ? true : false;
	}

	excavate() {
		this.type = "floor";
	}

	createExit(dir) {
		if (this.exits.indexOf(dir) === -1) {
			this.exits.push(dir);
		}
	}
}