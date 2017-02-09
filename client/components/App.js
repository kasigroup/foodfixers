import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

// function mapStateToProps(state) {
//   return {
//     posts: state.posts,
//     comments: state.comments
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }
//
// const App = connect(mapStateToProps, mapDispatchToProps)(Main);

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
