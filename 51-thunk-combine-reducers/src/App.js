import React from 'react';
import './App.css';
import CakeContainer from './CakeContainer'
import CakeForm from './CakeForm'
import GerbilContainer from './GerbilContainer'
import GerbilForm from './GerbilForm'

class App extends React.Component {

  render() {
    return (<>
          <section>
            <h2>Cakes</h2>
            <CakeContainer />
            <CakeForm />
          </section>
          <section>
            <h2>Gerbils</h2>
            <GerbilContainer />
            <GerbilForm />
          </section>
        </>)
  }
  
}

export default App

