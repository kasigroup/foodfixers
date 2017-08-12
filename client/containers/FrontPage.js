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
         <p>Välkommen till foodfixers.se, din sushi- och salladsbar online!</p>
         <img className="img-fluid" style={{maxWidth: "70%"}} src={food}></img>
         <p>Vi gör utkörningar runtomkring Jönköping. Vi stannar på fasta tider och platser
         både till lunch och middag. Skapa ditt konto nu och beställ något gott!</p>
         <Link className="btn main-btn" to="/categories">Beställ här</Link>
         <br></br><br></br>
         <p>Alla beställningar via appen måste göras senast dagen innan. Beställningar senare tas emot via telefon på Tel: 010-330 20 77.</p>
         <img className="img-fluid front-icon" style={{maxWidth: "60%"}} src={createIcon}></img>
         <h5>Skapa ett konto.</h5>
         <img className="img-fluid front-icon" style={{maxWidth: "60%"}} src={cart}></img>
         <h5>Lägg till mat i varukorgen.</h5>
         <img className="img-fluid front-icon" style={{maxWidth: "60%"}} src={stopIcon}></img>
         <h5>Välj en plats och tid.</h5>
         <img className="img-fluid front-icon" style={{maxWidth: "60%"}} src={payIcon}></img>
         <h5>Betala säkert med kort.</h5>
         <img className="img-fluid front-icon" style={{maxWidth: "60%"}} src={foodIcon}></img>
         <h5>Din mat levereras till plats.</h5>
         <Link className="btn main-btn" to="/categories">Börja här</Link>
         <div className="contact">
           <p>Följ oss på facebook för nyheter och information.   <a className="social-logo" href="https://www.facebook.com/foodfixers.se/" target="_blank"><i className="fa fa-facebook-official fa-3x" aria-hidden="true"></i></a></p>
           Email: <a href="#">foodfixersexpress@gmail.com</a><br></br>
           Tel: <a href="tel:+46103302077">010-330 20 77</a>
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
