import React from 'react';
import Reaction from './Reaction'

class Message extends React.Component {

  state = {
    facepalms: 0
  }
  
  facePalmButtonClicked = event => {
    this.setState({
      facepalms: this.state.facepalms + 1
    })
  }

  render(){

    const { text } = this.props //destructuring
    return (<li>
        { text }
        <Reaction facepalms={ this.state.facepalms } 
                  facePalmButtonClicked={ this.facePalmButtonClicked } />
      </li>);
  }

}

export default Message
