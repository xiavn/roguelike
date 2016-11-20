import { expect } from "chai";

import Character from "../src/helpers/characterSetup";
import { classOptions } from "../src/options";

const character = new Character();
const mage = new Character({
	pClass: "mage",
	attributes: {
		strength: 5,
		speed: 5,
		accuracy: 5,
		intelligence: 5,
		spirit: 5,
		constitution: 5
	}
});

describe("Helper - Character", () => {
	const options = classOptions;
	describe(".class", () => {
		it("should be the class passed in options at initialisation", () => {
			expect(mage.class).to.equal("mage");
		});
		it("should return a random class", () => {
			expect(character.class).to.be.oneOf(options.classes);
		});
	});
	describe(".attributes", () => {
		it("is an object with a key and value pair for each attribute", () => {
			const attributes = options.attributes;
			attributes.forEach(function(att) {
				expect(character.attributes).to.have.property(att)
					.that.is.a("number");			
			});
		});
		it("produces a value for each attribute that is the attribute passed in at inititalisation plus class bonuses", () => {
			expect(mage.attributes.strength).to.equal(5);
			expect(mage.attributes.speed).to.equal(5);
			expect(mage.attributes.accuracy).to.equal(6);
			expect(mage.attributes.intelligence).to.equal(7);
			expect(mage.attributes.spirit).to.equal(6);
			expect(mage.attributes.constitution).to.equal(4);
		});
		it("produces a value for each attribute that is 1d4+1 plus class bonuses (-1 -> 2)", () => {
			options.attributes.forEach(function(att) {
				expect(character.attributes[att]).to.be.within(1,7);
			});
		});
	});
	describe(".health", () => {
		it("is an object with a total and current", () => {
			expect(character.health).to.have.property("total")
					.to.be.a("number");
			expect(character.health).to.have.property("current")
					.that.is.a("number");	
		});
		it("should be calculated based off the characters class and constitution attribute", () => {
			const con = mage.attributes.constitution;
			const healthDie = parseInt(/\d+/g.exec(classOptions.classStats.mage.health)[0]);
			expect(mage.health.total).to.equal(healthDie + con);
		});
		it("should start full", () => {
			expect(mage.health.current).to.equal(mage.health.total);
		})
	});
	describe(".resource", () => {
		it("is an object with a type, total and current", () => {
			expect(character.resource).to.have.property("type")
					.that.is.oneOf(options.resources);
			expect(character.resource).to.have.property("total")
					.that.is.a("number");
			expect(character.resource).to.have.property("current")
					.that.is.a("number");	
		});
		describe("mana", () => {
			it("should be calculated based off the characters class of mage", () => {
				expect(mage.resource.type).to.equal("mana");
			});
			it("should be calculated based off the characters intelligence + 5", () => {
				const intelligence = mage.attributes.intelligence;
				expect(mage.resource.total).to.equal(5 + intelligence);
			});
			it("should start at full value", () => {
				expect(mage.resource.current).to.equal(mage.resource.total);
			});
		});
		describe("rage", () => {
			const fighter = new Character({
				pClass: "fighter"
			});
			it("should be calculated based off the characters class of fighter", () => {
				expect(fighter.resource.type).to.equal("rage");
			});
			it("should be calculated based off the characters constitution + 5", () => {
				const con = fighter.attributes.constitution;
				expect(fighter.resource.total).to.equal(5 + con);
			});
			it("should start at empty", () => {
				expect(fighter.resource.current).to.equal(0);
			});
		});
	});
});