import React from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
import * as sessionCreators from '../actions/sessionCreators';



class Header extends React.Component{

  constructor(props) {
   super(props);
   this.logOut = this.logOut.bind(this);
   this.goBack = this.goBack.bind(this);

   this.props.actions.loadProfile();

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


    const cart = <Link to="/cart"><p>{`Cart: ${this.props.orders.length}`}</p></Link>;

    if (!sessionStorage.jwt) {
      return (
        <header>
          <h1>
            Food Fixers
          </h1>
        </header>
      )
    }else if (this.props.location.pathname === "/home") {
      return (
        <header>
          <h1>
            Food Fixers
          </h1>

          {cart}

          <div className="btn-group">
            <Link to="/profile" className="btn btn-primary">Profile</Link>
            <Link to="/logout" className="btn btn-primary" onClick={this.logOut}>Log out</Link>
          </div>
        </header>
      )
    } else {
      return (
        <header>
          <h1>
            Food Fixers
          </h1>


          {cart}


          <div className="btn-group">
            <button onClick={browserHistory.goBack} className="btn btn-primary">Back</button>
            <Link to="/logout" className="btn btn-primary" onClick={this.logOut}>Log out</Link>
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
