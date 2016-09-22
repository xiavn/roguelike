import React from "react";
import { connect } from "react-redux";
import { showHelp } from "./redux/actions/helptext";

export class Help_Btn extends React.Component {
	toggleInstructions() {
		this.props.dispatch(showHelp(true));
	}
	render() {
		return (
			<button onClick={this.toggleInstructions.bind(this)}>H</button>
		);
	}
}

export default connect()(Help_Btn);