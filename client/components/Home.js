import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Accompaniments from './Accompaniments'
import Header from './Header'
import { Link } from 'react-router';
import * as orderActions from '../actions/orderActions';



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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(orderActions, dispatch)
}

export default connect(null, mapDispatchToProps)(Home);
