const diceRoller = (dice) => {
	const getDieValue = (die) => {
		return Math.floor(Math.random() * die) + 1;
	};
};

export default diceRoller;