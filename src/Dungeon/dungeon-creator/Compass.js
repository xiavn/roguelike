import Direction from "./Direction"

export default class Compass {
	constructor(directions = ["north", "south", "east", "west"]) {
		this.directions = directions
		for (let i = 0; i < directions.length; i++) {
			const direction = directions[i]
			this[direction] = new Direction(direction)
		}
	}

	spin(exclude = []) {
		let available = []
		let unavailable = []
		for (let p = 0; p<exclude.length; p++) {
			unavailable.push(exclude[p].name)
		}
		for (let i = 0; i<this.directions.length; i++) {
			if (unavailable.indexOf(this.directions[i]) === -1) {
				available.push(this.directions[i])
			}
		}
		const direction = Math.floor(Math.random() * available.length)
		return this[available[direction]]
	}
}