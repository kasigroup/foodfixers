import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getCartProducts, getCartQuantity } from '../reducers'
import { Link } from 'react-router-dom'

const NavBar = ({ products, quantity }) => (
  <div>
    <ul className="nav justify-content-center">
      <li className="nav-item"><Link className="nav-link" to="/">Login</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/cart">Cart ({quantity})</Link></li>
    </ul>
  </div>
)

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  quantity: getCartQuantity(state)
})

export default connect(
  mapStateToProps
)(NavBar)
