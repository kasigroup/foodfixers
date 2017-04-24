import React, { Component, PropTypes } from 'react'
import NavBar from './NavBar';



class App extends Component{
  render() {
    return (
      <div>
        <NavBar />
        <div id="main">
          <h4 className="logo">Food Fixers</h4>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
