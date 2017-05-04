import React, { Component, PropTypes } from 'react'
import NavBar from './NavBar';
import { RouteTransition } from 'react-router-transition';



class App extends Component{
  render() {
    return (
      <div>
        <NavBar />
        <div className="top-divider"></div>
        <div id="main">
          <h4 className="logo"></h4>
          <RouteTransition
            pathname={this.props.location.pathname}
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
          >
            {this.props.children}
          </RouteTransition>
        </div>
      </div>
    )
  }
}

export default App
