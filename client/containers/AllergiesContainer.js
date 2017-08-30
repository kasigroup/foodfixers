import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class AllergiesContainer extends Component {
  constructor(props) {
    super(props)
  }

   render() {
     return (
       <div>
         <h3 className="title">Allergier</h3>
         <div className="contact">
           Email: <a href="mailto:foodfixersexpress@gmail.com" target="_blank">foodfixersexpress@gmail.com</a><br></br>
           Tel: <a href="tel:+46103302077">010-330 20 77</a>
         </div>
         <p>Om du har någon livsmedelsallergi måste du läsa igenom det här stycket:</p>
         <p>Det är jobbigt med allergier! Vissa är känsligare än andra och bara du vet hur känslig du är. Det finns möjlighet att klicka i dom vanligaste överkänsligheterna och gör du det så gör vi allt för att din allergen inte kommer med i din mat. Vi har bra rutiner för detta och använder separata redskap och ytor, MEN som alltid i ett kök så finns det en liten risk för att spår av det ena ska hamna i det andra och är du allvarligt allergisk mot något så vågar vi helt enkelt inte garantera att din mat är 100% fri från din allergen. Då är det säkrast att bara äta hemmalagat.
         </p>
         <p>
           Om du har några andra livsmedelsallergier vill vi alltid att du klickar i ”andra allergier” och specifierar vilka. Det har hänt förut att vi varit lite wild and crazy en midsommar och nästan haft ihjäl någon med en jordgubbe…Så det är viktigt att du meddelar oss!
         </p>
         <p><b>Till dig som är glutenintolerant:</b></p>
         <p>Vi gillar inte heller gluten och använder bara glutenfria produkter i vårt kök.</p>
         <p>Vi använder bara Yamasa soja från Japan. Den jäser ihop med rostat vete men innehåller inget gluten efter fermenteringen. Livsmedelsverket har analyserat den och kunde inte påvisa gluten. Läs gärna mer <a href="https://www.livsmedelsverket.se/matvanor-halsa--miljo/sjukdomar-allergier-och-halsa/allergi-och-overkanslighet/gluten">här</a>.</p>
         <p>Vi använder bara Suehiro vinäger från japanska Mizkan till vårt sushiris. Även denna tillverkas ihop med vete men processas för att bli glutenfri. Läs gärna mer <a href="http://mizkan.com/JapaneseProducts/Restaurants/Vinegars/Suehiro-Grain-Flavored-Distilled-Vinegar.aspx">här</a>.</p>
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
)(AllergiesContainer)
