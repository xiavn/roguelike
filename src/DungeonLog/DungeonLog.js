import React, { PropTypes } from "react"
import Message from "./Message"

export const DungeonLog = ({ messageLog }) => {
	const messages = messageLog.map((message, i) => <Message message={message} key={i} />)
	return <div className="dungeonLog"><h3>Message Log</h3><ul>{messages}</ul></div>
}

DungeonLog.propTypes = {
	messageLog: PropTypes.array.isRequired
}

export default DungeonLog