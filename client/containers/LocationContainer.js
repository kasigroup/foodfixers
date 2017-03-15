import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getVisibleLocations } from '../reducers/locations'
import Location from '../components/Location'

const LocationContainer = ({ locations }) => (
  <Location
    locations={locations}
    >
  </Location>
)

const mapStateToProps = state => ({
  form: state.form.location,
  locations: getVisibleLocations(state.locations)
})

export default connect(
  mapStateToProps
)(LocationContainer)
