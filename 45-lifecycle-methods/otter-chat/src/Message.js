import React from 'react';
import Reaction from './Reaction'

class Message extends React.Component {

  // state = {
  //   facepalms: 99
  // }
  
  // facePalmButtonClicked = event => {
  //   this.setState({
  //     facepalms: this.state.facepalms + 1
  //   })
  // }

  render(){

    const { text, facepalms, id } = this.props.message //destructuring

    return (<li>
        { text }
        <Reaction facepalms={ facepalms } 
                  facePalmButtonClicked={ this.facePalmButtonClicked }
                  addFacepalmTo={ this.props.addFacepalmTo }
                  messageId={ id } />
      </li>);
  }

}

export default Message
