import React, { PropTypes } from 'react'
import Product from './Product'

const CartItem = ({ price, title, quantity, desc ,removeFromCart}) => (
  <div>
    <p onClick={removeFromCart}>{title} {price}kr {quantity ? ` x ${quantity}` : null}</p>
  </div>
)


export default CartItem
