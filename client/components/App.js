import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from './Home';
import * as accompanimentActions from '../actions/accompanimentActions';



function mapStateToProps(state) {
  return {
    accompaniments: state.accompaniments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(accompanimentActions, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Home);

export default App;
