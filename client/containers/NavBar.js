import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getCartProducts, getCartQuantity } from '../reducers'
import { Link } from 'react-router'
import { logOutUser } from '../actions/sessionActions'
import Burger from '../components/Burger'

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

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

function BurgerButton(props) {
  if (props.url !== "/" && sessionStorage.jwt) {
    return <Link to="/"><i className="fa fa-chevron-circle-left back-button" aria-hidden="true"></i></Link>;
  }else {
    return <Burger />;
  }

}



const NavBar = ({ products, quantity, logOutUser, url }) => (
  <div>
    <div className="top-nav" >
      <div className="burger-menu">
        <BurgerButton url={url} />
      </div>
      <div className="logo" >
        <Link to="/"><h4>Foodfixers Express</h4></Link>
      </div>
      <div className="cart-link">
        <Link to="/cart"><CSSTransitionGroup
          component="i"
          className="fa fa-shopping-basket shopping-icon"
          id="cart-link"
          transitionName="shopping-cart"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}></CSSTransitionGroup> {quantity}</Link>
      </div>
    </div>
    <div className="hamburger-menu">
      <ul className="nav justify-content-center">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
        <SessionButton logOut={ logOutUser }/>
        <AdminButton />
      </ul>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  quantity: getCartQuantity(state),
  url: state.url.urlParams
})

export default connect(
  mapStateToProps, { logOutUser }
)(NavBar)
