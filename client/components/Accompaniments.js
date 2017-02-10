import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as accompanimentActions from '../actions/accompanimentActions';

class Accompaniments extends React.Component {

  constructor(props) {
   super(props);
   this.loadAccompaniments = this.loadAccompaniments.bind(this);

  }

  loadAccompaniments(event) {
    event.preventDefault();
    this.props.actions.loadAccompaniments();
  }


  render() {
    return (
      <div>
        <h3>
          Accompaniments
        </h3>

        <a href="#" onClick={this.loadAccompaniments}>get</a>

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
