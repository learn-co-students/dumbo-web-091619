import React from 'react'

class MessageForm extends React.Component {

  state = {
    text: "",
    facepalms: 0
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  onSubmit = (event) => {
    event.preventDefault()
    const message = {
      text: this.state.text,
      facepalms: this.state.facepalms
    }
    this.props.addMessage(message)
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
