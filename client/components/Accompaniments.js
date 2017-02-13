import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as accompanimentActions from '../actions/accompanimentActions';

class Accompaniments extends React.Component {

  constructor(props) {
   super(props);
   // Load Accompaniments
   this.props.actions.loadAccompaniments();

  }


  render() {
    return (
      <div className="col-md-12">
      </div>
    )
  }
}




function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accompanimentActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Accompaniments);
