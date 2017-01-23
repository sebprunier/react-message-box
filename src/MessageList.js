import React, { PropTypes } from 'react'

import Message from './Message'

class MessageList extends React.Component {

  static propTypes = {
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    )
  }

  render () {
    return (
      <div className="message-list">
        Messages :
        {
          this.props.messages.map(
            m => <Message key={m.id} author={m.author} text={m.text} />
          )
        }
      </div>
    )
  }
}

export default MessageList;
