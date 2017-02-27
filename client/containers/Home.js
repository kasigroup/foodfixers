import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../containers/Header'
import CreateProfilePage from '../containers/CreateProfilePage'
import { Link } from 'react-router';
import * as orderActions from '../actions/orderActions';



class Home extends React.Component {

  constructor(props) {
   super(props);

  }

  componentWillMount() {
    console.log("loading")
    this.props.loadDishes();
  }

  render() {
    let checkProfile;
    if (!this.props.profile.first_name && !this.props.profile.last_name) {
     checkProfile = (
       <CreateProfilePage/>
     )
   }

    return (
      <div>
        <Header {...this.props}/>
        {checkProfile}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(orderActions, dispatch)
}

export default connect(null, mapDispatchToProps)(Home);
