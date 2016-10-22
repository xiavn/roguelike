export const classOptions = {
	classes: ["fighter","mage"],
	resources: ["mana", "rage"],
	attributes: ["strength", "speed", "accuracy", "intelligence", "spirit", "constitution"],
	classStats: {
		fighter: {
			resource: "rage",
			health: "d10",
			attributes: {
				strength: 2,
				accuracy: 1,
				constitution: 1,
				intelligence: -1,
			}
		},
		mage: {
			resource: "mana",
			health: "d6",
			attributes: {
				intelligence: 2,
				constitution: -1,
				accuracy: 1,
				spirit: 1
			}
		}
	}
};