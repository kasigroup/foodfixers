import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getCartProducts, getCartQuantity } from '../reducers'
import { Link } from 'react-router'
import { logOutUser } from '../actions/sessionActions'

const NavBar = ({ products, quantity, logOutUser }) => (
  <div>
    <ul className="nav justify-content-center">
      <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/cart">Cart ({quantity})</Link></li>
      <li className="nav-item"><a href="" className="nav-link" onClick={logOutUser}>Logout</a></li>
    </ul>
  </div>
)

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  quantity: getCartQuantity(state)
})

export default connect(
  mapStateToProps, { logOutUser }
)(NavBar)
