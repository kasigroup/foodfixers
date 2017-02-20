import React from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';
import {bindActionCreators} from 'redux';
import * as sessionCreators from '../actions/sessionCreators';



class Header extends React.Component{

  constructor(props) {
   super(props);
   this.logOut = this.logOut.bind(this);
   this.goBack = this.goBack.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    this.props.actions.logOutUser();
  }

  goBack() {
    event.preventDefault();
    window.history.back();
  }

  render(){
    if (!sessionStorage.jwt) {
      return (
        <header>
          <h1>
            Food Fixers
          </h1>
        </header>
      )
    }else {
      return (
        <header>
          <h1>
            Food Fixers
          </h1>



          <div className="btn-group">
            <button onClick={this.goBack} className="btn btn-primary">Back</button>
            <a href="/logout" className="btn btn-primary" onClick={this.logOut}>Log out</a>
          </div>
        </header>
      )
    }

  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionCreators, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Header);
