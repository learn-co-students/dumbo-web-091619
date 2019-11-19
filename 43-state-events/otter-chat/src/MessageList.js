import React from 'react'
import Message from './Message'

class MessageList extends React.Component {

  render(){

    const arrayOfMessages = [
      "Bark",
      "Purr",
      "Here is my favorite rock",
    ]

    return <ul>
      {
        // <li>Bark!</li>
        // <li>Purr...</li>
        // <li>Here is my favorite rock!</li>
      }
        <Message text="Bark" />
        <Message text="Purr" />
        <Message text="Blat" />
        <Message text="Here is my favorite rock" />
      </ul>
  }
}

export default MessageList
