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
          {this.props.dishes.map((dish, i) => <Product {...this.props} key={i} i={i} dish={dish} />)}
        </ul>
      </div>
    )
  }
}


export default LandingPage;
