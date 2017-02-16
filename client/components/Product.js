import React from 'react';
import { Link } from 'react-router';

class Product extends React.Component {
  render() {
    const { dish } = this.props;
    return (
      // <Link to={`/product/${dish.id}`}>
      // </Link>

      <div className="card">
        <img className="card-img-top" src="http://placehold.it/350x150" alt="Card image cap"></img>
        <div className="card-block">
          <h4 className="card-title">{dish.name}</h4>
          <p>{dish.price} kr</p>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="btn-group">
            <Link to={`/product/${dish.id}`} className="btn btn-primary">See more</Link>
            <Link to={"#"} className="btn btn-primary">Add to cart</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Product;
