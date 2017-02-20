import React from 'react';
import { Link } from 'react-router';

class OrderList extends React.Component {
  render() {
    const { dish, i } = this.props;

    

    return (
      <div>
          <h4 className="card-title">{dish.dish}</h4>
          <p>{dish.price} kr</p>
      </div>
    )
  }
}


export default OrderList;
