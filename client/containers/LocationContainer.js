import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getVisibleDeliveries } from '../reducers/deliveries'
import { getVisibleAreas } from '../reducers/areas'
import Location from '../components/Location'

const LocationContainer = ({ deliveries, areas }) => (
  <Location
    deliveries={deliveries}
    areas={areas}
    >
  </Location>
)

const mapStateToProps = state => ({
  form: state.form.location,
  deliveries: getVisibleDeliveries(state.deliveries),
  areas: getVisibleAreas(state.areas)
})

export default connect(
  mapStateToProps
)(LocationContainer)
