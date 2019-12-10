import React from 'react';

const initialState = {
  name: "",
  layers: 0
}

class CakeForm extends React.Component {

  state = initialState

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.addCake({
      name: this.state.name,
      layers: this.state.layers
    })
    this.setState({ ...initialState })
  }

  render(){
    return (
      <form onSubmit={ this.onSubmit }>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={ this.state.name } onChange={ this.onChange } />
        <label htmlFor="layers">Layers</label>
        <input type="number" id="layers" name="layers" value={ this.state.layers } onChange={ this.onChange } />
        <input type="submit" />
      </form>
    );
  }
}

export default CakeForm;

