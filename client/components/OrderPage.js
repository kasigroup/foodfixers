import React from 'react';
import { Link } from 'react-router';
import OrderList from './OrderList';


class OrderPage extends React.Component {

  constructor(props) {
   super(props);
  }


  render() {

    let totalPrice = 0;
    this.props.orders.map((dish) => totalPrice += dish.price)

    return (
      <div className="cards">
          {this.props.orders.map((dish, i) => <OrderList {...this.props} key={i} i={i} dish={dish} />)}
          <p>Total price: {totalPrice}kr</p>
      </div>
    )
  }
}


export default OrderPage;
