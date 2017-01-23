import React from 'react'

import MessageList from "./MessageList"
import MessageForm from "./MessageForm"

class MessageBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }

    this.handleNewMessage = this.handleNewMessage.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({
      messages : [
         { id: 1, author: "Sébastien", text: "Hello World" },
         { id: 2, author: "Mathieu", text: "I Love React" },
         { id: 3, author: "Guillaume", text: "Javascript Forever" }
      ]
    }), 1000)


  }

  handleNewMessage(message) {
    console.log(message)
    this.setState({
      messages: [...this.state.messages, Object.assign(message, {id: this.state.messages.length + 1})]
    })
  }

  render () {
    return (
      <div className="message-box">
        Message Box
        <MessageList messages={this.state.messages} />
        <MessageForm onNewMessage={this.handleNewMessage}/>
      </div>
    )
  }
}

export default MessageBox;
