import React from 'react'

class MessageForm extends React.Component {

  state = {
    text: "",
    facepalms: 0
  }

  onChange = (event) => {
    // console.log(event)
    // console.log(event.target)
    // console.log(event.target.value)
    // const newState = { }
    // newState[event.target.name] = event.target.value

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // onChangeFacepalms = (event) => {
  //   this.setState({
  //     facepalms: event.target.value
  //   })
  // }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.addMessage({
      text: this.state.text,
      facepalms: this.state.facepalms
    })
    this.setState({
      text: "",
      facepalms: 0
    })
  }

  render(){
    return <form onSubmit={ this.onSubmit }>
      <input type="text" 
             name="text"
             value={ this.state.text } 
             onChange={ this.onChange } />
      <input type="number" 
             name="facepalms"
             value={ this.state.facepalms } 
             onChange={ this.onChange } />
      <input type="submit" />
    </form>
  }
}

export default MessageForm
