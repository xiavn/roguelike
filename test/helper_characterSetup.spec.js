import { expect } from "chai";

import character from "../src/helpers/characterSetup";
import { classOptions } from "../src/options";

describe("character", () => {
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
		it("is an object with a key value pair for each attribute", () => {
			const attributes = options.attributes;
			attributes.forEach(function(att) {
				expect(character.attributes).to.have.property(att)
					.that.is.a('number');
			})
		});
	})
});