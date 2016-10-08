import { classOptions } from "../options";

const options = classOptions;

class Character {
	constructor(options) {
		this.class = options.classes[Math.floor(Math.random() * options.classes.length)];

	}
	get resource() {
		return options.classResource[this.class];
	}
}

export default new Character(options);