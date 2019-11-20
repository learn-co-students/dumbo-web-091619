import React, { Component } from 'react';
import Profile from './Profile'
import ChannelList from './ChannelList'


class Sidebar extends Component {

  state = {
    show: true
  }

  sidebarClicked = event => {
    this.setState({
      show: false
    })
  }

  render(){

    return <aside className={ this.state.show ? "Sidebar showing" : "Sidebar" } onClick={ this.sidebarClicked }>
      <Profile />
      <ChannelList />
    </aside>
  }


}

export default Sidebar

