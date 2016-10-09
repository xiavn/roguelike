import { classOptions } from "../options";

const options = classOptions;

class Character {
	constructor(options) {
		this.class = options.classes[Math.floor(Math.random() * options.classes.length)];

	}
	get resource() {
		return options.classStats[this.class].resource;
	}
}

export default new Character(options);