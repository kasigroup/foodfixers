import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from './Home';
import * as dishesActions from '../actions/dishesActions';



function mapStateToProps(state) {
  return {
    dishes: state.dishes,
    orders: state.order,
    profile: state.profile,
    deliveries: state.deliveries,
    locations: state.locations
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(dishesActions, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Home);

export default App;
