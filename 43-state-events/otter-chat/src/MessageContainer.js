import React from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'


class MessageContainer extends React.Component {

  render(){
    return <section className="MessageContainer">
      <h2>#tools</h2>
      <MessageList />
      <MessageForm />
    </section>
  }
}

export default MessageContainer
