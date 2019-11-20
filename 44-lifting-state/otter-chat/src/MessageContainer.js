import React from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'


class MessageContainer extends React.Component {

  state = {
    messages: [
      { 
        text: "Bark!",
        id: 1 
      },
      { 
        text: "Purr",
        id: 2 
      },
      { 
        text: "Here is my favorite rock",
        id: 3 
      },
      { 
        text: "Dan Quayle!",
        id: 4 
      }
    ]
  }


  addMessage = (message) => {
    this.setState({
      messages: [ ...this.state.messages, message] 
    })
  }

  render(){
    return <section className="MessageContainer">
      <h2>#tools</h2>
      <MessageList messages={ this.state.messages } />
      <MessageForm addMessage={ this.addMessage } />
    </section>
  }
}

export default MessageContainer
