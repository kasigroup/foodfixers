import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { checkout } from '../actions/cartActions'

class Burger extends Component {

  constructor(props) {
    super(props)

  }

  componentDidMount() {
    // Look for .hamburger
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".hamburger-menu");
    const item = document.querySelector(".nav-item");

    // On click
    menu.addEventListener("click", function() {
    // Toggle class "is-active"
      hamburger.classList.remove("is-active");
      menu.classList.remove("is-active");
      // Do something else, like open/close menu
    })

    hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
      hamburger.classList.toggle("is-active");
      menu.classList.toggle("is-active");
      // Do something else, like open/close menu
    })
  }

  render() {
    return (
      <div className="hamburger hamburger--3dy" id="hamburger" onClick={this.OpenHamburger}>
        <span className="hamburger-box">
          <span className="hamburger-inner">
          </span>
        </span>
      </div>
    )
  }


}


export default Burger
