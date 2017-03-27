import React from 'react'
import NavBar from './NavBar';

const App = React.createClass({
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
})

export default App
