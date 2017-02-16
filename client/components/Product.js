import React from 'react';
import { Link } from 'react-router';

class Product extends React.Component {
  render() {
    const { dish } = this.props;
    return (
      <Link to={`/product/${dish.id}`}>
        <li className="list-group-item">{dish.name} {dish.price} kr</li>
      </Link>
    )
  }
}

export default Product;
