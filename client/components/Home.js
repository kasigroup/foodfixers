import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Accompaniments from './Accompaniments'
import Header from './Header'
import { Link } from 'react-router';



class Home extends React.Component {

  constructor(props) {
   super(props);

  }

  componentWillMount() {
    console.log("loading")
    this.props.loadAccompaniments();
  }

  render() {
    return (
      <div>
        <Header />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}


export default Home;
