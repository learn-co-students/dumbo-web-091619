import React from 'react';
import { connect } from 'react-redux'
import actionCreators from './actionCreators'

const initialState = {
  name: "",
  tailLength: 0
}

class GerbilForm extends React.Component {

  state = initialState

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.addGerbil({
      name: this.state.name,
      tailLength: this.state.tailLength
    })
    this.setState({ ...initialState })
  }

  render(){
    return (
      <form onSubmit={ this.onSubmit }>
        <ol>
          <li>
            <label htmlFor="name">Name</label>
            <input type="text" 
                   id="name" 
                   name="name" 
                   value={ this.state.name } 
                   onChange={ this.onChange } />
          </li>
          <li>
            <label htmlFor="tail-length">Tail length</label>
            <input type="number" 
                   id="tail-length" 
                   name="tailLength" 
                   value={ this.state.tailLength } 
                   onChange={ this.onChange } />
          </li>
          <li>
            <input type="submit" />
          </li>
        </ol>
      </form>
    );
  }
}


const mapDispatchToProps = (dispatch, mergeProps) => {
  return { 
    addGerbil: (gerbil) => {
      dispatch(actionCreators.createGerbil(gerbil))
    } 
  }
}

export default connect(undefined, mapDispatchToProps)(GerbilForm);






