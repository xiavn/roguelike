import React, { PropTypes } from 'react'

const Message = ({ message }) =>
  <li>{message.text}</li>

Message.propTypes = {
  message: PropTypes.shape({
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
}

export default Message