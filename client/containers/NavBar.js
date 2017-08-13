import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getCartProducts, getCartQuantity } from '../reducers'
import { Link } from 'react-router'
import { logOutUser } from '../actions/sessionActions'
import Burger from '../components/Burger'
import logga from "../images/logga.png";

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

function SessionButton(props) {
  if (sessionStorage.jwt) {
    return <li className="nav-item"><a href="" className="nav-link" onClick={props.logOut}>Logga ut</a></li>;
  }
  return <li className="nav-item"><Link className="nav-link" to="/login">Logga in</Link></li>;
}

function AdminButton(props) {
  if (props.admin) {
    return <li className="nav-item"><Link className="nav-link" to="/admin">Admin</Link></li>;
  }else {
    return null
  }

}

function BurgerButton(props) {
  if (props.url !== "/" && sessionStorage.jwt) {
    if (props.url.includes("product")) {
      return <Link to={window.previousLocation.pathname}><i className="fa fa-chevron-circle-left back-button" aria-hidden="true"></i></Link>;
    }else if (props.url.includes("category")) {
      return <Link to="/categories"><i className="fa fa-chevron-circle-left back-button" aria-hidden="true"></i></Link>
    }
    return <Link to="/"><i className="fa fa-chevron-circle-left back-button" aria-hidden="true"></i></Link>;
  }else {
    return <Burger />;
  }

}



const NavBar = ({ products, quantity, logOutUser, url, admin }) => (
  <div className="nav-container">
    <div className="top-nav" >
      <div className="burger-menu">
        <BurgerButton url={url} />
      </div>
      <div className="logo" >
        <Link to="/"><img src={logga}></img></Link>
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
        <li className="nav-item"><Link className="nav-link" to="/">Hem</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/stops">Här stannar vi</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/about">Om oss</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/profile">Profil</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/allergies">Allergier</Link></li>
        <SessionButton logOut={ logOutUser }/>
        <AdminButton admin={admin}/>
        {/* <li className="nav-item"><a href="tel:+46103302077">Tel: 010-330 20 77</a></li> */}
      </ul>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  quantity: getCartQuantity(state),
  url: state.url.urlParams,
  admin: state.account.admin
})

export default connect(
  mapStateToProps, { logOutUser }
)(NavBar)
