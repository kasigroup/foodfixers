import React from 'react'
import CartItem from './CartItem'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions/productActions'

const Cart  = ({ products, total, removeFromCart, onCheckoutClicked, location}) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <CartItem
        title={product.name}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
        removeFromCart={() => removeFromCart(product.id)}
      />
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <div>
      <h3 className="title">Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: {total}kr</p>
      <button className="btn main-btn" onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

export default connect(
  null,
  { removeFromCart }
)(Cart)
