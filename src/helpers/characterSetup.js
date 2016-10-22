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
	get attributes() {
		let attributes = {};
		const classStats = options.classStats[this.class];
		options.attributes.forEach((att) => {
			let value = diceRoller("1d4 + 1");
			if (classStats.hasOwnProperty(att)) {
				value += classStats[att];
			}
			attributes[att] = value;
		});
		return attributes;
	}
}

export default new Character(options);