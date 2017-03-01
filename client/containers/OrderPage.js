import React from 'react';
import { Link } from 'react-router';
import OrderItem from '../components/OrderItem';
import LocationContainer from "./LocationContainer";


class OrderPage extends React.Component {

  constructor(props) {
   super(props);
   this.onSave = this.onSave.bind(this);
  }

  onSave(event) {
    event.preventDefault();
    this.props.sendOrder(this.props.orders);
  }

  render() {
    let totalPrice = 0;
    this.props.orders.map((dish) => totalPrice += dish.price)

    return (
      <div>
        {/* <LocationContainer deliveries={this.props.deliveries} locations={this.props.locations}/> */}
        <div className="cards">
            {this.props.orders.map((dish, i) => <OrderItem {...this.props} key={i} i={i} dish={dish} />)}
            <h3>Total price: {totalPrice}kr</h3>

            <button className="btn btn-primary" onClick={this.onSave}>Send order</button>
        </div>
      </div>
    )
  }
}


export default OrderPage;
