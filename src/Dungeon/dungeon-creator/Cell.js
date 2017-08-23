export default class Cell {
	constructor(x, y) {
		this.location = [x, y]
		this.type = "rock"
		this.exits = []
	}

	isDeadend() {
		return this.exits.length === 1 ? true : false
	}

	excavate() {
		this.type = "floor"
	}

	bury() {
		this.type = "rock"
	}

	createExit(dir) {
		if (!~this.exits.indexOf(dir)) {
			this.exits.push(dir)
		}
	}

	removeExit(dir) {
		const index = this.exits.indexOf(dir)
		if (~index) {
			this.exits.splice(index,1)
		}
	}
}