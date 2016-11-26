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
		this._attributes = attributes;
		this.level = level;
	}

	get stats() {
		return classOptions.classStats[this.class];
	}

	get attributes() {
		let newAtt = {};
		classOptions.attributes.forEach((att) => {
			let value = this._attributes[att];
			if (this.stats.attributes.hasOwnProperty(att)) {
				value += this.stats.attributes[att];
			}
			newAtt[att] = value;
		});
		return newAtt;
	}

	get health() {
		let healthDie = /\d+/g.exec(this.stats.health);
		healthDie = parseInt(healthDie[0]);
		const health = (healthDie + this.attributes.constitution) + ((diceRoller(this.stats.health) + this.attributes.constitution) * (this.level - 1));
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