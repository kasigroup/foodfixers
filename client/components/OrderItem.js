import React from 'react';
import { Link } from 'react-router';

class OrderItem extends React.Component {
  render() {
    const { dish, i } = this.props;



    return (
      <div className="order-item">
          <h4 className="card-title">{dish.dish}</h4>
          <p>{dish.price} kr</p>
          <button type="button" className="btn" aria-label="Close" onClick={() => this.props.removeFromOrder(i)}>&times;</button>
      </div>
    )
  }
}


export default OrderItem;
