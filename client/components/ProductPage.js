import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Product from './Product';
import * as accompanimentActions from '../actions/accompanimentActions';



class LandingPage extends React.Component {

  constructor(props) {
   super(props);
   this.props.actions.loadAccompaniments();

  }


  render() {
    return (
      <div>
        <p>Product Page</p>
        <ul className="list-group">
          {this.props.accompaniments.map((accompaniment, i) => <Product {...this.props} key={i} i={i} accompaniment={accompaniment} />)}
        </ul>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accompanimentActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(LandingPage);
