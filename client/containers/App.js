import React, { Component, PropTypes } from 'react'
import NavBar from './NavBar';
import NotificationContainer from './NotificationContainer'



class App extends Component{  
  componentWillReceiveProps() {
    window.previousLocation = this.props.location
  }

  render() {

    return (
      <div>
        <NavBar />
        <div className="top-divider"></div>
        <div id="main">
          <h4 className="logo"></h4>
          {this.props.children}
          <NotificationContainer />
        </div>
      </div>

    )
  }
}

export default App
