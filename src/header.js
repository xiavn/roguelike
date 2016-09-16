import React from "react";

const Header = () => 
	<header>
		<Title />
		<Help_Btn />
	</header>;

const Title = () =>
	<h1>Title</h1>;

class Help_Btn extends React.Component {
	toggleInstructions() {
		console.log("Yes!");
	}
	render() {
		return (
			<button onClick={this.toggleInstructions.bind(this)}>H</button>
		);
	}
	
}

export default Header;
export { Title, Help_Btn };