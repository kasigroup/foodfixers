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

function AdminButton(props) {
  const admin = false;
  if (admin) {
    return <li className="nav-item"><Link className="nav-link" to="/admin">Admin</Link></li>;
  }else {
    return null
  }

}

const NavBar = ({ products, quantity, logOutUser }) => (
  <div>
    <div className="top-nav" >
      <div className="burger-menu" >
        <span>BRG</span>
      </div>
      <div className="logo" >
        <h4>Foodfixers Express</h4>
      </div>
      <div className="cart-link" >
        <Link to="/cart"><i className="fa fa-shopping-basket shopping-icon" aria-hidden="true"></i> {quantity}</Link>
      </div>
    </div>
    <div className="bot-nav">
      <ul className="nav justify-content-center">
        <SessionButton logOut={ logOutUser }/>
        <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
        <AdminButton />
      </ul>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  quantity: getCartQuantity(state)
})

export default connect(
  mapStateToProps, { logOutUser }
)(NavBar)
