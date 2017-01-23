import React, { PropTypes } from 'react'

class Message extends React.Component {
  static propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }

  render () {
    return (
      <div className="message">
        {`${this.props.author} : ${this.props.text}`}
      </div>)
  }
}

export default Message;
