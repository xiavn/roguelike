export const classOptions = {
	classes: ["fighter","mage"],
	resources: ["mana", "rage"],
	attributes: ["strength", "speed", "accuracy", "intelligence", "spirit", "constitution"],
	classStats: {
		fighter: {
			resource: "rage",
			health: "d10"
		},
		mage: {
			resource: "mana",
			health: "d6"
		}
	}
};