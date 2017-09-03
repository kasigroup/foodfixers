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
         <h3 className="title">Om oss & Kontakt</h3>

          <img className="img-fluid" src={owners} style={{maxWidth: "60%", paddingBottom: "15"}}></img>
          <p>Billy och Johanna Brillantes har drivit sushibarer i tjugo år och har nu äntligen tagit klivet in i framtiden genom att erbjuda sushi- och salladsbar online.</p>

          <p>Vi är en sushibar i din mobil. Idén är att samla beställningar en dag i förväg genom appen från våra kunder och leverera maten till fasta platser på bestämda tider enligt ett veckoschema.</p>

<p><b>Det finns många fördelar med foodfixers.se:</b></p>

<p>-Du slipper stressa iväg på lunchen för att hämta mat långt bort.</p>

<p>-Du vet att vi kommer en viss dag en viss tid varje vecka och det kan bli din sushidag.</p>

<p>-Vi vet precis hur mycket mat som kommer gå åt och slipper matsvinn.</p>

<p>-Eftersom vi kör ut mat till många människor i samma leverans blir det mindre trafik än vid traditionell utkörning där man kör kors och tvärs med en och en portion.</p>

<p>-Vi tar ingen avgift för utkörningen.</p>

<p>-Vi tillagar din sushi precis före leverans.</p>

<p>-Ingen samordning behövs på jobbet, var och en beställer och betalar för sig själv.</p>

<p>-Alla plaster vi levererar till ligger vid stora företag med gott om parkering. Chansen är stor att vi levererar till ditt jobb, eller precis i närheten där det är lätt att hämta.</p>

<p>-Du kan hämta i vårt produktionskök på Hedenstorp om det är närmare för dig, ring i så fall och förbeställ och betala sedan med Swhish.
</p>

          <div className="contact">
            <p><b>Kontaktuppgifter</b></p>
            Tel: <a href="tel:+46103302077">010-330 20 77</a>
            <p>Telefontider: Vard 9-18</p>
            Email: <a href="mailto:hello@foodfixers.se" target="_blank">hello@foodfixers.se</a><br></br>
            <a className="social-logo" href="https://www.facebook.com/foodfixers.se/" target="_blank"><i className="fa fa-facebook-official fa-3x" aria-hidden="true"></i></a>
            <a className="social-logo" href="https://www.instagram.com/foodfixers.se"><i className="fa fa-instagram fa-3x" aria-hidden="true"></i></a>
            <p className="social-media">@foodfixers.se</p>

          </div>
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
