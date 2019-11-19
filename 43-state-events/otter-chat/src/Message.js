import React from 'react';

class Message extends React.Component {

  // constructor(){
  //   super()
  //   this.state = { facepalms: 20 }
  //   this.facePalmButtonClicked = this.facePalmButtonClicked.bind(this)
  // }
  
  state = {
    facepalms: 0
  }
  
  facePalmButtonClicked = event => {
    this.setState({
      facepalms: this.state.facepalms + 1
    })
    // console.log(this.state.facepalms)
  }

  // setChicken(thing) {
  //   this.setState(thing)
  // }

  render(){
    // console.log(this)
    // console.log(this.state)

    const { text } = this.props
    return (<li>
        { text }
        <button onClick={ this.facePalmButtonClicked }>
          🤦‍♀️ { this.state.facepalms }
        </button>
      </li>);
  }

}

export default Message
