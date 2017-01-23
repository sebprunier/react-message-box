import React, { PropTypes } from 'react'

class MessageForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = { author: '', text : '', error: false}

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleAuthorChange(e) {
    this.setState({
      author: e.target.value
    })
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    if (this.state.author === "" || this.state.text === "") {
      this.setState({
        error: true
      })
    } else {
      const message = {
        author: this.state.author,
        text: this.state.text
      }
      this.props.onNewMessage(message);
      this.setState({
        author: '',
        text : '',
        error: false
      })
    }
  }

  render () {
    return (
      <div className="message-form">
        {this.state.error && <span>Veuillez renseigner les champs SVP</span>}
        Nouveau message :
        <form className="messageForm"
          onSubmit={this.onSubmit}>
           <input type="text" placeholder="Votre nom"
              value={this.state.author}
              onChange={this.handleAuthorChange} />
           <input type="text" placeholder="Votre message"
            value={this.state.text}
            onChange={this.handleTextChange} />
           <input type="submit" value="Valider" />
       </form>
      </div>
    )
  }
}

export default MessageForm;
