import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Accompaniments from './Accompaniments'
import Header from './Header'
import { Link } from 'react-router';



class Home extends React.Component {

  constructor(props) {
   super(props);
   this.logOut = this.logOut.bind(this);
  //  this.renderInventory = this.renderInventory.bind(this);

  //  store.dispatch(loadAccompaniments());
  }

  logOut(event) {
    event.preventDefault();
    this.props.logOutUser();
  }

  // renderInventory(key) {
  // const accompaniment = this.props.accompaniments[key];
  // return (
  //   <div key={key}>
  //     <p>{accompaniment.name} {accompaniment.price}<span>kr</span></p>
  //   </div>
  // )
  // }


  render() {
    return (
      <div>
        <Header />
        {React.cloneElement(this.props.children, this.props)}
        <a href="/logout" className="btn btn-primary" onClick={this.logOut}>log out</a>
      </div>
    )
  }
}


export default Home;
