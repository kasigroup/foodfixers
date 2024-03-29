import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getVisibleDeliveries } from '../reducers/deliveries'
import { getVisibleAreas } from '../reducers/areas'
import Location from '../components/Location'
import { saveLocation } from '../actions/cartActions'
import { addNotification } from '../actions/notificationActions'
import moment from "moment"




class LocationContainer extends Component {

  constructor(props) {
    super(props)
    this.show = this.show.bind(this);
    this.notif = this.notif.bind(this);
  }

  show(values){
    const { saveLocation } = this.props
    console.log(values)
    saveLocation(values)
  }

  notif(){
    const { addNotification } = this.props
    addNotification("Valde plats", "success")
  }

  render() {
      const { deliveries, areas,location } = this.props

      const dateArray = deliveries.map(function(item){
         var date = new Date(item.delivery_at)
         date = moment(date).format('DD/MM/YYYY dddd');
         return {date: date, area_id: item.location.area_id};
      });

      // const uniqueDays = dateArray.filter((obj, pos, arr) => {
      //  return arr.map(mapObj => mapObj.date).indexOf(obj.date) === pos;
      // });

      function uniqBy(a, key) {
          var seen = {};
          return a.filter(function(item) {
              var k = key(item);
              return seen.hasOwnProperty(k) ? false : (seen[k] = true);
          })
      }

      var uniqueDays = uniqBy(dateArray, JSON.stringify)

      return (
        <Location
          deliveries={deliveries}
          areas={areas}
          days={uniqueDays}
          showResults={this.show}
          notif={this.notif}
          location={location}
          >
        </Location>
      )
  }

}


const mapStateToProps = state => ({
  form: state.form.location,
  deliveries: getVisibleDeliveries(state.deliveries),
  areas: getVisibleAreas(state.areas),
  location: state.cart.choosenLocation
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveLocation, addNotification }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationContainer)
