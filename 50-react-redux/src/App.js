import React from 'react';
import './App.css';
import CakeContainer from './CakeContainer'
import CakeForm from './CakeForm'

class App extends React.Component {

  // state = {
  //   cakes: [
  //     {
  //       id: 1,
  //       name: "Birthday cake"
  //     },
  //     {
  //       id: 2,
  //       name: "Red Velvet"
  //     }
  //   ]
  // }

  // addCake = (cake) => {
  //   this.setState({
  //     cakes: [...this.state.cakes, cake]
  //   })
  // }

  render() {
    return <>
      <CakeForm />
      <CakeContainer />
    </>
  }
}

export default App

