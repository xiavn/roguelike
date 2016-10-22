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
		const classStats = options.classStats[this.class];
		let attributes = options.attributes.map((att) => {
			let value = diceRoller("1d4 + 1");
			if (classStats.hasOwnProperty(att)) {
				value += classStats[att];
			}
			return { name: att, value: value };
		});
		return attributes;
	}
}

export default new Character(options);