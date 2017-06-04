import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getVisibleDeliveries } from '../reducers/deliveries'
import { getVisibleAreas } from '../reducers/areas'
import Location from '../components/Location'
import { saveLocation } from '../actions/cartActions'
import { addNotification } from '../actions/notificationActions'




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
    addNotification("Saved location", "success")
  }

  render() {
      const { deliveries, areas,location } = this.props


      return (
        <Location
          deliveries={deliveries}
          areas={areas}
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
