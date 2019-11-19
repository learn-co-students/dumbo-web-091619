import React from 'react'
import Message from './Message'


export default class MessageWindow extends React.Component {
  

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
        <Message text="Bark" numberOfLikes={ 7 } />
        <Message text="Purr" />
        <Message text="Here is my favorite rock" />
      </ul>
  }
}















