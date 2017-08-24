import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { loadProfile } from '../actions/profileActions'
import { loadAccount } from '../actions/sessionActions'
import billy from "../images/billy.png"
import createIcon from "../images/create-account.png";
import cart from "../images/varukorg.png";
import stopIcon from "../images/choose-stop.png";
import payIcon from "../images/pay.png";
import foodIcon from "../images/get-food.png";

class FrontPage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { loadProfile, loadAccount } = this.props
    if (sessionStorage.jwt) {
      loadAccount()
      loadProfile()
    }
  }

   render() {

     return (
       <div>
         <p className="headline" >Hej, jag är din sushikock i mobilen!</p>
         <div className="img-container">
         <img className="img-fluid" style={{maxWidth: "100%"}} src={billy}></img>
         </div>
         <p>I den här appen kan du beställa sushi och välja att
            få den levererad till en av tjugosex platser runt omkring
            i Jönköping, Huskvarna och Torsvik!</p>
         <Link className="btn main-btn-red" to="/about">LÄS MER OM OSS</Link>
         <Link className="btn main-btn-red" to="/stops">SE ALLA VÅRA STOPP</Link>
         <Link className="btn main-btn-red" to="/categories">KOLLA IN VÅR MENY</Link>
         <Link className="btn main-btn-red" to="/login">REGISTRERA KONTO/LOGGA IN</Link>
         <Link className="btn main-btn-red" to="/allergies">ALLERGIER</Link>
         <Link className="btn main-btn-red" to="/categories">SE HUR APPEN FUNGERAR</Link>

         <div className="contact">
          <div className="inner-contact">
          <a className="social-logo" href="https://www.facebook.com/foodfixers.se/" target="_blank"><i className="fa fa-facebook-official fa-3x" aria-hidden="true"></i></a>
          <a className="social-logo" href="https://www.instagram.com/foodfixers.se"><i className="fa fa-instagram fa-3x" aria-hidden="true"></i></a>
          <p className="social-media">@foodfixers.se</p>
          <br></br><br></br>
           <a className="email-logo" href="#">
           <i className="fa fa-envelope fa-3x " aria-hidden="true"></i><p className="social-media email">foodfixersexpress@gmail.com</p></a>
           </div>
         </div>
       </div>
     )
   }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadProfile, loadAccount}, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(FrontPage)
