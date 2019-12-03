import React from 'react';
import './App.css';
import LogIn from './LogIn'
import SnackDashboard from './SnackDashboard'


class App extends React.Component {

  state = {
    loggedInUserId: null,
    token: null
  }

  componentDidMount(){
    console.log("componentDidMount", localStorage.token)
    if (localStorage.token) {
      this.setState({
        token: localStorage.token,
        loggedInUserId: localStorage.loggedInUserId
      })
    }
  }

  gotToken = (token, loggedInUserId) => {
    console.log("logged in", token)
    localStorage.token = token
    localStorage.loggedInUserId = loggedInUserId
    this.setState({
      token,
      loggedInUserId
    })
  }

  logOutClicked = () => {
    localStorage.token = null
    localStorage.loggedInUserId = null

    this.setState({
      token: null,
      loggedInUserId: null
    })
  }

  render(){
    return (<main>
      {
        this.state.token 
        ? <>
            <button onClick={ this.logOutClicked }>Log out</button>
            <SnackDashboard token={ this.state.token } loggedInUserId={ this.state.loggedInUserId } />
          </>
        : <LogIn gotToken={ this.gotToken } />
      }
    </main>);
  }
}

export default App;
