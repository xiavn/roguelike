import React from "react";
import { connect } from "react-redux";
import { showHelp } from "./redux/actions/helptext";

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
		this.props.dispatch(showHelp(true));
	}
	render() {
		return (
			<button onClick={this.toggleInstructions.bind(this)}>H</button>
		);
	}
}

Help_Btn = connect()(Help_Btn);

export default Header;
export { Title, Help_Btn };