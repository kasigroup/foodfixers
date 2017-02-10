import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from './Home';



function mapStateToProps(state) {
  return {
    accompaniments: state.accompaniments
  }
}

// function mapDispatchToProps(dispatch) {
//     // bind action creators
// }

const App = connect(mapStateToProps)(Home);

export default App;
