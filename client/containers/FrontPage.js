import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { loadProfile } from '../actions/profileActions'
import { loadAccount } from '../actions/sessionActions'
import food from "../images/mat-front.png";
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
         <p>Hej, jag är din sushikock i mobilen!</p>
         <img className="img-fluid" style={{maxWidth: "70%"}} src={food}></img>
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
           <p>@foodfixers.se<a className="social-logo" href="https://www.facebook.com/foodfixers.se/" target="_blank"><i className="fa fa-facebook-official fa-3x" aria-hidden="true"></i></a></p>
           <a className="email" href="#">foodfixersexpress@gmail.com</a><br></br>

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
