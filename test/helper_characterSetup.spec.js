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
	describe(".combinedAttributes", () => {
		const charAtt = character.combinedAttributes;
		describe(".attributes", () => {
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
		describe(".derived", () => {
			it("contains health and resource stats", () => {
				expect(charAtt.derived).to.have.property('health');
				expect(charAtt.derived).to.have.property('resource');
			});
			describe(".health", () => {
				it("is an object with a total and current", () => {
					expect(charAtt.derived.health).to.have.property("total")
							.to.be.a("number");
					expect(charAtt.derived.health).to.have.property("current")
							.that.is.a("number");	
				});
			});
			describe(".resource", () => {
				it("is an object with a type, total and current", () => {
					expect(charAtt.derived.resource).to.have.property("type")
							.that.is.oneOf(options.resources);
					expect(charAtt.derived.resource).to.have.property("total")
							.that.is.a("number");
					expect(charAtt.derived.resource).to.have.property("current")
							.that.is.a("number");	
				});
			});
		});
		
		
	});
});