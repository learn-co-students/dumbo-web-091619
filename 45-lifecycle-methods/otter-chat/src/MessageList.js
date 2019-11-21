import React from 'react'
import Message from './Message'

class MessageList extends React.Component {

  render(){
    const transformedArray = this.props.messages.map((message) => 
      <Message key={ message.id } message={ message } addFacepalmTo={ this.props.addFacepalmTo } />)

    return <ul className="MessageList">{ 
      transformedArray 
    }</ul>
  }
}

export default MessageList
