import React from 'react';
import { Link } from 'react-router';

class NotFound extends React.Component {

    render() {
      return (
        <div>
          <h1>
            Page Not Found
          </h1>
          <Link to="/login">Login</Link>
        </div>
      )
    }
  }


export default NotFound;
