import React from 'react';
import { Link } from 'react-router';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <p>Landing page</p>
        <Link to="/login">Login</Link>
      </div>
    )
  }
}

export default LandingPage;
