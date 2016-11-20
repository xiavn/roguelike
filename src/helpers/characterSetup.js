import { classOptions } from "../options";
import diceRoller from "./dice";

export const attributeRoller = () => {
	const attributes = {};
	classOptions.attributes.forEach((att) => {
		let value = diceRoller("1d4 + 1");
		attributes[att] = value;
	});
	return attributes;
};

export default class Character {
	constructor({level = 1,
		pClass = classOptions.classes[Math.floor(Math.random() * classOptions.classes.length)],
		attributes = attributeRoller()} = {}) {
		this.class = pClass;
		this.attributes = attributes;
		this.level = level;
	}

	get stats() {
		return classOptions.classStats[this.class];
	}

	// set attributes(attributes) {
	// 	let newAtt = attributes;
	// 	classOptions.attributes.forEach((att) => {
	// 		let value;
	// 		if (this.stats.hasOwnProperty(att)) {
	// 			value += this.stats[att];
	// 		}
	// 		newAtt[att] = value;
	// 	});
	// 	return newAtt;
	// }

	get health() {
		const healthDie = /\d+/g.exec(this.stats.health);
		const health = parseInt(healthDie[0]) + this.attributes.constitution;
		return {
			total: health,
			current: health
		};
	}

	get resource() {
		const resource = this.stats.resource;
		let rsTotal,
			rsCurrent;
		switch(resource) {
			case "rage":
				rsCurrent =  0;
				rsTotal = 5 + this.attributes.constitution;
				break;
			case "mana":
				rsTotal = 5 + this.attributes.intelligence;
				rsCurrent = rsTotal;
				break;
			default:
				rsTotal = 0;
				rsCurrent = 0;
				break;
		}
		return {
			type: resource,
			total: rsTotal,
			current: rsCurrent 
		};
	}
}