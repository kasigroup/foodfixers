import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import owners from "../images/owners.png";

class AboutContainer extends Component {
  constructor(props) {
    super(props)
  }

   render() {
     return (
       <div>
         <h3 className="title">Om oss</h3>
         <div className="contact">
           Email: <a href="#">foodfixersexpress@gmail.com</a><br></br>
           Tel: <a href="tel:+46103302077">010-330 20 77</a>
         </div>
         <p>Vi vill att du ska bli mätt och belåten. Vi vill att du ska må bra. Vi vill att du blir så mätt, så belåten och må så bra att du fortsätter att beställa mat från oss under många, många år.
          Det är därför vi vi gör sushi som vi alltid har gjort den. Ända sedan tidigt nittiotal när Kundo-San på Sakura restaurang först visade hur. Finfina råvaror, rena smaker, inte massa lull-lull. Bara en perfekt kombination av de fem bassmakerna; sött, salt, syrligt, beskt och starkt. Och så lite kärlek. Där har du vårt vinnande sushikoncept! Enjoy :)
          </p>
          <p><b>PS:</b> Du vet väl att vi gör lika mumsiga sallader också?</p>
          <img className="img-fluid" src={owners} style={{maxWidth: "60%", paddingBottom: "15"}}></img>
          <p>Billy och Johanna Brillantes har drivit sushibarer i tjugo år och har nu äntligen tagit klivet in i framtiden genom att erbjuda sushi- och salladsbar online.</p>
       </div>
     )
   }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(AboutContainer)
