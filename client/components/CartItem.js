import React from 'react'
import Product from './Product'

const CartItem = ({ price, title, quantity, desc ,removingFromCart}) => (
  <div>
    <p className="inline-block">{title} {price}kr {quantity ? `  ${quantity}` : null}st</p><span className="cart-del" onClick={removingFromCart}><i className="fa fa-times-circle-o" aria-hidden="true"></i></span>
  </div>
)


export default CartItem
