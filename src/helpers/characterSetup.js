import { classOptions } from "../options";
import diceRoller from "./dice";

const options = classOptions;

class Character {
	constructor(options) {
		this.class = options.classes[Math.floor(Math.random() * options.classes.length)];
	}
	get resource() {
		return options.classStats[this.class].resource;
	}

	get combinedAttributes() {
		const classStats = options.classStats[this.class];
		let attributes = {};
		options.attributes.forEach((att) => {
			let value = diceRoller("1d4 + 1", att);
			if (classStats.hasOwnProperty(att)) {
				value += classStats[att];
			}
			attributes[att] = value;
		});
		let combined = {
			attributes: attributes
		}
		return combined;
	}

	set health(constitution) {
		const total = diceRoller(options.classStats[this.class].health, "health") + constitution;
		return { total: total, current: total};
	}
}

export default new Character(options);