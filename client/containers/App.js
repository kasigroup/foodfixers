import React, { Component, PropTypes } from 'react'
import NavBar from './NavBar';



class App extends Component{
  render() {

    return (
      <div>
        <NavBar />
        <div className="top-divider"></div>
        <div id="main">
          <h4 className="logo"></h4>
          {this.props.children}
        </div>
      </div>

    )
  }
}

export default App
