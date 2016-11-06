export const classOptions = {
	classes: ["fighter", "mage"],
	resources: ["luck", "mana", "rage"],
	attributes: ["strength", "speed", "accuracy", "intelligence", "spirit", "constitution"],
	classStats: {
		peasant: {
			resource: "luck",
			health: "d6",
			attributes: {
				spirit: 1,
				constitution: 1,
				strength: 1
			}
		},
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