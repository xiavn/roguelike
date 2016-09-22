import React, { PropTypes } from "react";
import { connect } from "react-redux";

export const Instructions = ({ shouldDisplay }) => {
	const display = shouldDisplay ? "visible" : "hidden";
	return <div className={display}>Instructions</div>;
};

Instructions.propTypes = {
	shouldDisplay: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
	return {
		shouldDisplay: state.showHelp
	};
};

export default connect(mapStateToProps)(Instructions);