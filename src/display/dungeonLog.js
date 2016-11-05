import React, { PropTypes } from "react";
import { connect } from "react-redux";

export const DungeonLog = ({ log }) => {
	const messages = log.map((message, i) => {
		return <DungeonLogMessage message={message} />;
	});
	return <div class="dungeonLog"><ul>{messages}</ul></div>;
};

DungeonLog.propTypes = {
	log: PropTypes.array.isRequired
};

export const DungeonLogMessage = ({ message }) => 
	<li>{ message.text }</li>;

DungeonLogMessage.propTypes = {
	message: PropTypes.shape({
		type: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired
};

const mapStateToProps = (state) => {
	return {
		log: state.log
	};
};

export default connect(mapStateToProps)(DungeonLog);