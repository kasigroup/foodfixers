import React from 'react';
import { Link } from 'react-router';
import Product from './Product';


class LandingPage extends React.Component {

  constructor(props) {
   super(props);
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


export default LandingPage;
