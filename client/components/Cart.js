import React from 'react'
import CartItem from './CartItem'
import { connect } from 'react-redux'


const Cart  = ({ products, total, removingFromCart, onCheckoutClicked, location}) => {
  console.log(total)
  var totalInt = parseInt(total);
  var moms = totalInt*0.25
  console.log(moms)
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <CartItem
        title={product.name}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
        removingFromCart={() => removingFromCart(product.id, product.name)}
      />
    )
  ) : (
    <em>Lägg till maträtter i kundvagnen.</em>
  )

  return (
    <div>
      <h3 className="title">Din kundvagn</h3>
      <div>{nodes}</div>
      <p>Summa: {total}kr</p>
      <p>Moms 25%: {moms}kr</p>
      {/* <button className="btn main-btn" onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button> */}
    </div>
  )
}

export default connect(
  null,
  {  }
)(Cart)
