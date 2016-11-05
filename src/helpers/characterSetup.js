import { classOptions } from "../options";
import diceRoller from "./dice";

const options = classOptions;

class Character {
	constructor(options) {
		this.class = options.classes[Math.floor(Math.random() * options.classes.length)];
	}
	get combinedAttributes() {
		const classStats = options.classStats[this.class];
		let attributes = {};
		//Generate a set or random attributes: 1d4+1 + class bonus
		options.attributes.forEach((att) => {
			let value = diceRoller("1d4 + 1");
			if (classStats.hasOwnProperty(att)) {
				value += classStats[att];
			}
			attributes[att] = value;
		});
		//Generate health: class health die(full value) + constitution
		const healthDie = /\d+/g.exec(classStats.health);
		const health = parseInt(healthDie[0]) + attributes.constitution;
		//Generate resource: resource dependent on class
		const resource = classStats.resource;
		let rsTotal,
			rsCurrent;
		switch(resource) {
			case "rage":
				rsCurrent =  0;
				rsTotal = 5 + attributes.constitution;
				break;
			case "mana":
				rsTotal = 5 + attributes.intelligence;
				rsCurrent = rsTotal;
				break;
			default:
				rsTotal = 0;
				rsCurrent = 0;
				break;
		};
		let derived = {
			health: {
				total: health,
				current: health
			},
			resource: {
				type: resource,
				total: rsTotal,
				current: rsCurrent
			}
		};
		let combined = {
			attributes: attributes,
			derived: derived
		};
		return combined;
	}
}

export default new Character(options);