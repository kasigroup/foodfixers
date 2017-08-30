import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import owners from "../images/owners.png";

class StopsContainer extends Component {
  constructor(props) {
    super(props)
  }

   render() {
     return (
       <div>
         <h3 className="title">Här stannar vi</h3>
         <h5>Här finner du alla våra stopp men du kan också skapa ett konto och logga in för att få en bättre överblick!</h5>
         <div className="contact">
           Email: <a href="mailto:foodfixersexpress@gmail.com" target="_blank">foodfixersexpress@gmail.com</a><br></br>
           Tel: <a href="tel:+46103302077">010-330 20 77</a>
         </div>
        <h4>Måndagar</h4>
        <p>-lunch, eftermiddag och kv&auml;ll</p>
        <p>&nbsp;</p>
        <p>Torsvik</p>
        <p>Kraftv&auml;rmeverket</p>
        <p>Huvudentr&eacute;n</p>
        <p>Energiv&auml;gen 10 J&ouml;nk&ouml;ping</p>
        <p>10:30-10:35</p>
        <p>&nbsp;</p>
        <p>Torsvik</p>
        <p>Friskis &amp; Svettis</p>
        <p>Parkeringen</p>
        <p>Kylv&auml;gen 4 J&ouml;nk&ouml;ping</p>
        <p>10:40-10:45</p>
        <p>&nbsp;</p>
        <p>Torsvik</p>
        <p>IKEA Norra (CDC)</p>
        <p>Receptionen/Bussh&aring;llplatsen</p>
        <p>M&ouml;belv&auml;gen 14 J&ouml;nk&ouml;ping</p>
        <p>10:50-10:55</p>
        <p>&nbsp;</p>
        <p>Torsvik</p>
        <p>ElGiganten</p>
        <p>Parkeringen/R&ouml;krutan</p>
        <p>M&ouml;belv&auml;gen 51 J&ouml;nk&ouml;ping</p>
        <p>11:00-11:10</p>
        <p>&nbsp;</p>
        <p>Torsvik</p>
        <p>Shell</p>
        <p>informationstavlan</p>
        <p>Thorsviksv&auml;gen 102 J&ouml;nk&ouml;ping</p>
        <p>11:15-11:45</p>
        <p>&nbsp;</p>
        <p>A6</p>
        <p>&Aring;tervinningssatationen</p>
        <p>Parkeringen bortom IKEAs utg&aring;ng</p>
        <p>Kompanigatan/Bataljonsgatan</p>
        <p>14:00-14:30</p>
        <p>&nbsp;</p>
        <p>A6</p>
        <p>&Aring;tervinningssatationen</p>
        <p>Parkeringen bortom IKEAs utg&aring;ng</p>
        <p>Kompanigatan/Bataljonsgatan</p>
        <p>16:00-16:30</p>
        <p>&nbsp;</p>
        <p>A6</p>
        <p>&Aring;tervinningssatationen</p>
        <p>Parkeringen bortom IKEAs utg&aring;ng</p>
        <p>Kompanigatan/Bataljonsgatan</p>
        <p>18:00-18:30</p>
        <p>&nbsp;</p>
        <h4>Tisdagar</h4>
        <p>-lunch, eftermiddag och kv&auml;ll</p>
        <p>&nbsp;</p>
        <p>V&auml;ster</p>
        <p>Science Park</p>
        <p>Parkeringen/Huvudentr&eacute;n</p>
        <p>Gjuterigatan 9 J&ouml;nk&ouml;ping</p>
        <p>11:10-11:15</p>
        <p>&nbsp;</p>
        <p>S&ouml;der</p>
        <p>Campus Arena</p>
        <p>Parkeringen mot Munksj&ouml;n</p>
        <p>Barnarpsgatan 39C J&ouml;nk&ouml;ping</p>
        <p>11:20-11:25</p>
        <p>&nbsp;</p>
        <p>Munksj&ouml;staden</p>
        <p>Munksj&ouml;tornet</p>
        <p>Utanf&ouml;r Parkeringsgaraget</p>
        <p>Vaggerydsgatan 1 J&ouml;nk&ouml;ping</p>
        <p>11:30-11:35</p>
        <p>&nbsp;</p>
        <p>Gamla Flygf&auml;ltet/ Ljungarum</p>
        <p>&Ouml;oB</p>
        <p>Parkeringen</p>
        <p>Bang&aring;rdsgatan 1 J&ouml;nk&ouml;ping</p>
        <p>11:40-11:45</p>
        <p>&nbsp;</p>
        <p>K&aring;lg&aring;rden</p>
        <p>Teliahuset</p>
        <p>Parkeringen mellan #13-15</p>
        <p>Klubbhusgatan 13 J&ouml;nk&ouml;ping</p>
        <p>11:55-12:00</p>
        <p>&nbsp;</p>
        <p>Gamla Flygf&auml;ltet</p>
        <p>ICA Maxi</p>
        <p>Parkeringen lilla entr&eacute;n</p>
        <p>Herkulesv&auml;gen 7 J&ouml;nk&ouml;ping</p>
        <p>12:00-12:15</p>
        <p>&nbsp;</p>
        <p>A6</p>
        <p>&Aring;tervinningssatationen</p>
        <p>Parkeringen bortom IKEAs utg&aring;ng</p>
        <p>Kompanigatan/Bataljonsgatan</p>
        <p>14:00-14:30</p>
        <p>&nbsp;</p>
        <p>A6</p>
        <p>&Aring;tervinningssatationen</p>
        <p>Parkeringen bortom IKEAs utg&aring;ng</p>
        <p>Kompanigatan/Bataljonsgatan</p>
        <p>16:00-16:30</p>
        <p>&nbsp;</p>
        <p>A6</p>
        <p>&Aring;tervinningssatationen</p>
        <p>Parkeringen bortom IKEAs utg&aring;ng</p>
        <p>Kompanigatan/Bataljonsgatan</p>
        <p>18:00-18:30</p>
        <p>&nbsp;</p>
        <h4>Onsdagar</h4>
        <p>-lunch, eftermiddag och kv&auml;ll</p>
        <p>&nbsp;</p>
        <p>Torsvik</p>
        <p>Kraftv&auml;rmeverket</p>
        <p>Huvudentr&eacute;n</p>
        <p>Energiv&auml;gen 10 J&ouml;nk&ouml;ping</p>
        <p>10:30-10:35</p>
        <p>&nbsp;</p>
        <p>Torsvik</p>
        <p>Friskis &amp; Svettis</p>
        <p>Parkeringen</p>
        <p>Kylv&auml;gen 4 J&ouml;nk&ouml;ping</p>
        <p>10:40-10:45</p>
        <p>&nbsp;</p>
        <p>Torsvik</p>
        <p>IKEA Norra (CDC)</p>
        <p>Receptionen/Bussh&aring;llplatsen</p>
        <p>M&ouml;belv&auml;gen 14 J&ouml;nk&ouml;ping</p>
        <p>10:50-10:55</p>
        <p>&nbsp;</p>
        <p>Torsvik</p>
        <p>ElGiganten</p>
        <p>Parkeringen/R&ouml;krutan</p>
        <p>M&ouml;belv&auml;gen 51 J&ouml;nk&ouml;ping</p>
        <p>11:00-11:10</p>
        <p>&nbsp;</p>
        <p>Torsvik</p>
        <p>Shell</p>
        <p>informationstavlan</p>
        <p>Thorsviksv&auml;gen 102 J&ouml;nk&ouml;ping</p>
        <p>11:15-11:45</p>
        <p>&nbsp;</p>
        <p>A6</p>
        <p>&Aring;tervinningssatationen</p>
        <p>Parkeringen bortom IKEAs utg&aring;ng</p>
        <p>Kompanigatan/Bataljonsgatan</p>
        <p>14:00-14:30</p>
        <p>&nbsp;</p>
        <p>A6</p>
        <p>&Aring;tervinningssatationen</p>
        <p>Parkeringen bortom IKEAs utg&aring;ng</p>
        <p>Kompanigatan/Bataljonsgatan</p>
        <p>16:00-16:30</p>
        <p>&nbsp;</p>
        <p>A6</p>
        <p>&Aring;tervinningssatationen</p>
        <p>Parkeringen bortom IKEAs utg&aring;ng</p>
        <p>Kompanigatan/Bataljonsgatan</p>
        <p>18:00-18:30</p>
        <p>&nbsp;</p>
        <h4>Torsdagar</h4>
        <p>-lunch, eftermiddag och kv&auml;ll</p>
        <p>&nbsp;</p>
        <p>Stensholm</p>
        <p>SAAB</p>
        <p>Huvudentr&eacute;n/Grinden</p>
        <p>Stensholmsv&auml;gen 20 Huskvarna</p>
        <p>11:00-11:05</p>
        <p>&nbsp;</p>
        <p>Huskvarna</p>
        <p>Husqvarna Fabriken</p>
        <p>Huvudentr&eacute;n/Grinden</p>
        <p>Drottninggatan 2 Huskvarna</p>
        <p>11:15-11:20</p>
        <p>&nbsp;</p>
        <p>Huskvarna</p>
        <p>Sporthallen/Alfred Dalinskolan</p>
        <p>Mellan sporthallen och skolan</p>
        <p>Alfred Dalinv&auml;gen 8 Huskvarna</p>
        <p>11:25-11:30</p>
        <p>&nbsp;</p>
        <p>Huskvarna</p>
        <p>Datorgatan/Engelska Skolan</p>
        <p>Semconhusets Huvudentr&eacute;</p>
        <p>Datorgatan 1 Huskvarna</p>
        <p>11:35-11:40</p>
        <p>&nbsp;</p>
        <p>Varg&ouml;n</p>
        <p>NetOnNet</p>
        <p>Parkeringen</p>
        <p>Vasav&auml;gen 3 J&ouml;nk&ouml;ping</p>
        <p>11:50-11:55</p>
        <p>&nbsp;</p>
        <p>Rosenlund</p>
        <p>Prolympia</p>
        <p>&Aring;tervinningsstationen mellan</p>
        <p>Prolympia och KFUM huset</p>
        <p>Glansgatan 1 J&ouml;nk&ouml;ping</p>
        <p>12:00-12:05</p>
        <p>&nbsp;</p>
        <p>Rosenlund</p>
        <p>Rosenlunds V&aring;rdcentrum</p>
        <p>Huvudentr&eacute;n</p>
        <p>Hermansv&auml;gen 5 J&ouml;nk&ouml;ping</p>
        <p>12:10-12:15</p>
        <p>&nbsp;</p>
        <p>A6</p>
        <p>&Aring;tervinningssatationen</p>
        <p>Parkeringen bortom IKEAs utg&aring;ng</p>
        <p>Kompanigatan/Bataljonsgatan</p>
        <p>14:00-14:30</p>
        <p>&nbsp;</p>
        <p>A6</p>
        <p>&Aring;tervinningssatationen</p>
        <p>Parkeringen bortom IKEAs utg&aring;ng</p>
        <p>Kompanigatan/Bataljonsgatan</p>
        <p>16:00-16:30</p>
        <p>&nbsp;</p>
        <p>A6</p>
        <p>&Aring;tervinningssatationen</p>
        <p>Parkeringen bortom IKEAs utg&aring;ng</p>
        <p>Kompanigatan/Bataljonsgatan</p>
        <p>18:00-18:30</p>
        <p>&nbsp;</p>
        <h4>Fredagar</h4>
        <p>-lunch, eftermiddag och kv&auml;ll</p>
        <p>&nbsp;</p>
        <p>Ljungarum S&ouml;dra</p>
        <p>Arla</p>
        <p>Huvudentr&eacute;n</p>
        <p>Verktygsv&auml;gen 21 J&ouml;nk&ouml;ping</p>
        <p>10:55-11:00</p>
        <p>&nbsp;</p>
        <p>Ljungarum Fridhem</p>
        <p>Beijer</p>
        <p>Utanf&ouml;r entr&eacute;n</p>
        <p>Industrigatan 2 J&ouml;nk&ouml;ping</p>
        <p>11:05-11:10</p>
        <p>&nbsp;</p>
        <p>Sol&aring;sen</p>
        <p>Media Markt</p>
        <p>Parkeringen</p>
        <p>Sol&aring;sv&auml;gen 12 J&ouml;nk&ouml;ping</p>
        <p>11:15-11:20</p>
        <p>&nbsp;</p>
        <p>Sol&aring;s Center</p>
        <p>Ljusexperten</p>
        <p>Parkeringen</p>
        <p>Sol&aring;sv&auml;gen 22 J&ouml;nk&ouml;ping</p>
        <p>11:20-11:25</p>
        <p>&nbsp;</p>
        <p>Ryhov</p>
        <p>Hus D9 (N&auml;ra Citygross)</p>
        <p>Personalentr&eacute;n</p>
        <p>Psykiatriv&auml;gen J&ouml;nk&ouml;ping</p>
        <p>11:30-11:40</p>
        <p>&nbsp;</p>
        <p>A6</p>
        <p>Kapsch</p>
        <p>Godsmottagningen</p>
        <p>Bataljonsgatan 12</p>
        <p>11:45-11:50</p>
        <p>&nbsp;</p>
        <p>A6</p>
        <p>&Aring;tervinningssatationen</p>
        <p>Parkeringen bortom IKEAs utg&aring;ng</p>
        <p>Kompanigatan/Bataljonsgatan</p>
        <p>11:55-12:05</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>Ljungarum</p>
        <p>Prototal/ByggMax</p>
        <p>Parkeringen/Grinden</p>
        <p>Instrumentv&auml;gen 4 J&ouml;nk&ouml;ping</p>
        <p>12:10-12:15</p>
        <p>&nbsp;</p>
        <p>A6</p>
        <p>&Aring;tervinningssatationen</p>
        <p>Parkeringen bortom IKEAs utg&aring;ng</p>
        <p>Kompanigatan/Bataljonsgatan</p>
        <p>14:00-14:30</p>
        <p>&nbsp;</p>
        <p>A6</p>
        <p>&Aring;tervinningssatationen</p>
        <p>Parkeringen bortom IKEAs utg&aring;ng</p>
        <p>Kompanigatan/Bataljonsgatan</p>
        <p>16:00-16:30</p>
        <p>&nbsp;</p>
        <p>A6</p>
        <p>&Aring;tervinningssatationen</p>
        <p>Parkeringen bortom IKEAs utg&aring;ng</p>
        <p>Kompanigatan/Bataljonsgatan</p>
        <p>18:00-18:30</p>
        <p>&nbsp;</p>
        <h4>Lördagar</h4>
        <p>-lunch, eftermiddag, kv&auml;ll</p>
        <p>&nbsp;</p>
        <p>A6</p>
        <p>&Aring;tervinningssatationen</p>
        <p>Parkeringen bortom IKEAs utg&aring;ng</p>
        <p>Kompanigatan/Bataljonsgatan</p>
        <p>12:15-12:45</p>
        <p>A6</p>
        <p>&Aring;tervinningssatationen</p>
        <p>Parkeringen bortom IKEAs utg&aring;ng</p>
        <p>Kompanigatan/Bataljonsgatan</p>
        <p>14:00-14:30</p>
        <p>&nbsp;</p>
        <p>A6</p>
        <p>&Aring;tervinningssatationen</p>
        <p>Parkeringen bortom IKEAs utg&aring;ng</p>
        <p>Kompanigatan/Bataljonsgatan</p>
        <p>16:00-16:30</p>
        <p>&nbsp;</p>
        <p>A6</p>
        <p>&Aring;tervinningssatationen</p>
        <p>Parkeringen bortom IKEAs utg&aring;ng</p>
        <p>Kompanigatan/Bataljonsgatan</p>
        <p>18:00-18:30</p>
        <p>&nbsp;</p>
        <h4>Söndagar</h4>
        <p>-inga leveranser</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>

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
)(StopsContainer)
