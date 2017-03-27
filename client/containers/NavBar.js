import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getCartProducts, getCartQuantity } from '../reducers'
import { Link } from 'react-router'
import { logOutUser } from '../actions/sessionActions'

function SessionButton(props) {
  if (sessionStorage.jwt) {
    return <li className="nav-item"><a href="" className="nav-link" onClick={props.logOut}>Logout</a></li>;
  }
  return <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>;
}

const NavBar = ({ products, quantity, logOutUser }) => (
  <div className="top-nav">
    <ul className="nav justify-content-center">
      <SessionButton logOut={ logOutUser }/>
      <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/cart">Cart ({quantity})</Link></li>
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
