import React from 'react';
import { Link } from 'react-router';
import LoginPage from './loginPage';

class Main extends React.Component {
  render() {
    return (
      <div>
        <LoginPage {...this.props} />
      </div>
    )
  }
}

export default Main;
