import React from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'


class MessageContainer extends React.Component {

  state = {
    messages: []
  }

  addFacepalmTo = (messageId) => {

    // TODO: persist with a PATCH fetch

    const newMessages = this.state.messages.map(message => {
      if (message.id === messageId) {
        return {
          ...message,
          facepalms: message.facepalms + 1
        }
      } else {
        return message
      }
    })

    this.setState({
      messages: newMessages
    })
  }
  addMessage = (message) => {
    fetch("http://localhost:3000/messages", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(message)
    }).then(res => res.json())
      .then(data => {
        this.setState({
          messages: [ ...this.state.messages, data] 
        })
      }) 
  }

  render(){
    return <section className="MessageContainer">
      <h2>#tools</h2>
      <MessageList messages={ this.state.messages } addFacepalmTo={ this.addFacepalmTo } />
      <MessageForm addMessage={ this.addMessage } />
    </section>
  }

  componentDidMount(){
    // debugger
    fetch("http://localhost:3000/messages")
      .then(res => res.json())
      .then(data => this.setState({
        messages: data
      }))
  }
}

export default MessageContainer
