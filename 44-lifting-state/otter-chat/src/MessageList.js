import React from 'react'
import Message from './Message'

class MessageList extends React.Component {

  render(){

    const transformedArray = this.props.messages.map(function(message){
      return <Message key={ message.id } text={ message.text } />
    })

    return <ul>{ 
      transformedArray 
    }</ul>
  }
}

export default MessageList
