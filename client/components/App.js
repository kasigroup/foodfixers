import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from './Home';
import * as sessionCreators from '../actions/sessionCreators';



function mapStateToProps(state) {
  return {
    accompaniments: state.accompaniments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(sessionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Home);

export default App;
