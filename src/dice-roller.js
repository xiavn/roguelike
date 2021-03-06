/* eslint no-eval: 0 */
const diceRoller = dice => {

	const getDieValue = die => {
		return Math.floor(Math.random() * die) + 1;
	};

	const parseDice = dice => {
		const elements = /(\d*)d{1}(\d+)/ig.exec(dice),
			die = parseInt(elements[2], 10);
		let amount = elements[1] === "" ? 1 : parseInt(elements[1], 10),
			total = 0;
		while (amount > 0) {
			const rolled = getDieValue(die);
			total += rolled;
			amount--;
		}

		return total;
	};

	let total = 0;
	const diceTrimmed = dice.replace(/\s/g, ""),
		diceRolls = diceTrimmed.replace(/\d*d{1}\d+/ig, parseDice);
	total = eval(diceRolls);
	return total;
};

export default diceRoller;