import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getCartProducts, getCartQuantity } from '../reducers'
import { Link } from 'react-router-dom'

const NavBar = ({ products, quantity }) => (
  <div>
    <ul className="nav justify-content-center">
      <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/cart">Cart ({quantity})</Link></li>
      <li className="nav-item"><button className="nav-link" onClick={() => sessionStorage.removeItem('jwt')}>Logout</button></li>
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
