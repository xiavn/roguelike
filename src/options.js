export const classOptions = {
	classes: ["fighter","mage"],
	resources: ["mana", "rage"],
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