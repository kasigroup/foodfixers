import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { getVisibleDeliveries } from '../reducers/deliveries'
import { getVisibleAreas } from '../reducers/areas'
import Location from '../components/Location'


class LocationContainer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
      const { deliveries, areas } = this.props
      return (
        <Location
          deliveries={deliveries}
          areas={areas}
          >
        </Location>
      )
  }

}


const mapStateToProps = state => ({
  form: state.form.location,
  deliveries: getVisibleDeliveries(state.deliveries),
  areas: getVisibleAreas(state.areas)
})

export default connect(
  mapStateToProps
)(LocationContainer)
