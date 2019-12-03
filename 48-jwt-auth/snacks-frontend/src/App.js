import React from 'react';
import './App.css';
import LogIn from './LogIn'
import SnackDashboard from './SnackDashboard'


class App extends React.Component {

  state = {
    loggedInUserId: 1,
  }

  render(){
    return (<main>
      {
        true
          ? <>
              <button>Log out</button>
              <SnackDashboard loggedInUserId={ this.state.loggedInUserId } />
            </>
          : <LogIn />
      }
    </main>);
  }
}

export default App;
