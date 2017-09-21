import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { getVisibleDeliveries } from '../reducers/deliveries'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import owners from "../images/owners.png";
import { loadDeliveries } from '../actions/deliveriesActions'
import moment from 'moment'


class StopsContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { loadDeliveries } = this.props
    loadDeliveries()
  }

   render() {
     const { deliveries } = this.props
     const timeArray = deliveries.map(function(item){
        var date = new Date(item.delivery_at)
        var day = moment(date).format('dddd');
        var time = moment(date).format('HH:mm');
        return {day: day, time: time, id: item.id, location: item.location};
     });
     console.log(timeArray);

     return (
       <div>
         <h3 className="title">Här stannar vi</h3>
         <br></br>
         <h5>Här finner du alla våra stopp men du kan också skapa ett konto och logga in för att få en bättre överblick!</h5>
         <br></br>
         <h5>Det går även bra att hämta på Hedenstorp i mån av tid, ring oss i förväg!</h5>
         <div className="contact">
           Email: <a href="mailto:hello@foodfixers.se" target="_blank">hello@foodfixers.se</a><br></br>
           Tel: <a href="tel:+46103302077">010-330 20 77</a>
         </div>
         <div>
           <h3>Måndag</h3>
           {timeArray.map(del => del.day === "måndag" ? <p key={del.id}>{del.location.name} - {del.time}</p> : null)}
           <h3>Tisdag</h3>
           {timeArray.map(del => del.day === "tisdag" ? <p key={del.id}>{del.location.name} - {del.time}</p> : null)}
           <h3>Onsdag</h3>
           {timeArray.map(del => del.day === "onsdag" ? <p key={del.id}>{del.location.name} - {del.time}</p> : null)}
           <h3>Torsdag</h3>
           {timeArray.map(del => del.day === "torsdag" ? <p key={del.id}>{del.location.name} - {del.time}</p> : null)}
           <h3>Fredag</h3>
           {timeArray.map(del => del.day === "fredag" ? <p key={del.id}>{del.location.name} - {del.time}</p> : null)}
           <h3>Lördag</h3>
           <p>Inga stopp</p>
           <h3>Söndag</h3>
           <p>Inga stopp</p>
         </div>
       </div>
     )
   }
}

const mapStateToProps = state => ({
  deliveries: getVisibleDeliveries(state.deliveries),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadDeliveries }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StopsContainer)
