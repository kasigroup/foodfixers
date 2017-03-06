import React from 'react';
import { Link } from 'react-router';
import OrderItem from '../components/OrderItem';
import Cart from '../components/Cart';
import LocationContainer from "./LocationContainer";


class CartContainer extends React.Component {

  constructor(props) {
   super(props);
   this.onSave = this.onSave.bind(this);
  }

  onSave(event) {
    event.preventDefault();
    this.props.sendOrder(this.props.orders);
  }

  render() {

    return (
      <div>
        {/* <LocationContainer deliveries={this.props.deliveries} locations={this.props.locations}/> */}
        <Cart dishes={this.props.dishes} order={this.props.orders} />
      </div>
    )
  }
}


export default CartContainer;
