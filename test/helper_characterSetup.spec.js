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
	describe(".combinedAttributes", () => {
		describe(".attributes", () => {
			const charAtt = character.combinedAttributes;
			it("is an object with a key and value pair for each attribute", () => {
				const attributes = options.attributes;
				attributes.forEach(function(att) {
					expect(charAtt.attributes).to.have.property(att)
						.that.is.a("number");			
				});
			});

			it("produces a value for each attribute that is 1d4+1 plus class bonuses (-1 -> 2)", () => {
				options.attributes.forEach(function(att) {
					expect(charAtt.attributes[att]).to.be.within(1,7);
				});
			});
		});
		
		
	});
	// describe(".health", () => {
	// 	it("is an object with a total and current", () => {
	// 		expect(character.health).to.have.property("total")
	// 				.that.is.a("number");
	// 		expect(character.health).to.have.property("current")
	// 				.that.is.a("number");	
	// 	});
	// });
});