import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Accompaniments from './Accompaniments'
import Header from './Header'
import { Link } from 'react-router';



class Home extends React.Component {

  constructor(props) {
   super(props);

   this.state = {
      order: {}
    };
  }

  componentWillMount() {
    console.log("loading")
    this.props.loadDishes();
  }

  render() {
    return (
      <div>
        <Header {...this.props}/>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}


export default Home;
