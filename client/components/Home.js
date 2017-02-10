import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Accompaniments from './Accompaniments'
import * as sessionCreators from '../actions/sessionCreators';
import store from '../store';
import { loadAccompaniments } from '../actions/accompanimentActions';

class Home extends React.Component {

  constructor(props) {
   super(props);
   this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    this.props.actions.logOutUser();
  }



  render() {
    return (
      <div>
        <h1>
          Home
        </h1>

        <Accompaniments />

        <a href="/logout" onClick={this.logOut}>log out</a>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionCreators, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Home);
