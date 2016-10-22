import { expect } from "chai";

import character from "../src/helpers/characterSetup";
import { classOptions } from "../src/options";

describe("Helper - Character", () => {
	const options = classOptions;
	describe(".class", () => {
		it("should return a random class", () => {
			expect(character.class).to.be.oneOf(options.classes);
		});
	});
	describe(".resource", () => {
		it("should return the resource for the class", () => {
			const charClass = character.class;
			expect(character.resource).to.equal(options.classStats[charClass].resource);
		});
	});
	describe(".attributes", () => {
		it("is an array of objects with an attribute name and value", () => {
			const attributes = options.attributes;
			attributes.forEach(function(att) {
				function findAtt(attributes) {
					return attributes.name === att;
				}
				expect(character.attributes.find(findAtt)).to.have.property("name", att);
				expect(character.attributes.find(findAtt)).to.have.property("value")
					.that.is.a("number");			
			});
		});
	});
});