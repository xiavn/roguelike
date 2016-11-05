import React, { PropTypes } from "react";
import { connect } from "react-redux";

export const DungeonLog = ({ messageLog }) => {
	const messages = messageLog.map((message, i) => {
		return <DungeonLogMessage message={message} />;
	});
	return <div className="dungeonLog"><h3>Message Log</h3><ul>{messages}</ul></div>;
};

DungeonLog.propTypes = {
	messageLog: PropTypes.array.isRequired
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
		messageLog: state.messageLog
	};
};

export default connect(mapStateToProps)(DungeonLog);