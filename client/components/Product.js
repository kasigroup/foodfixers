import React from 'react';
import { Link } from 'react-router';

class Product extends React.Component {
  render() {
    const { accompaniment } = this.props;
    return (
      <Link to={`/product/${accompaniment.id}`}>
        <li className="list-group-item">{accompaniment.name} {accompaniment.price} kr</li>
      </Link>
    )
  }
}

export default Product;
