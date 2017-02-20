import React from 'react';
import { Link } from 'react-router';

class Product extends React.Component {
  render() {
    const { dish, i } = this.props;
    return (

      <div className="card">
        <img className="card-img-top" src="http://placehold.it/350x150" alt="Card image cap"></img>
        <div className="card-block">
          <h4 className="card-title">{dish.name}</h4>
          <p>{dish.price} kr</p>
          <p className="card-text">{dish.description}</p>
          <div className="btn-group">
            <Link to={`/product/${dish.id}`} className="btn btn-primary">See more</Link>
            <button className="btn btn-primary" onClick={() => this.props.addToOrder(i, dish)}>Add to cart</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Product;
