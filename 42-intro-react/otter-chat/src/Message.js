import React from 'react';

class Message extends React.Component {

  render(){

    // const text = this.props.text
    const { text } = this.props

    // console.log(this)
    // console.log(this.props.text)

    // const message = "bark";
    return (<li>{ text }</li>);
  }

}

export default Message
