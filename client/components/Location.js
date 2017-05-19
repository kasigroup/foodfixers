import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import LocationForm from './LocationForm'
import { setOrderLocation } from '../actions/locationActions'



const Location  = ({ deliveries , areas, showResults, setLocation, notif}) => {
  return (
    <div>
      <h3 className="title">Locations</h3>
      <LocationForm deliveries={deliveries} notif={notif} areas={areas} onSubmit={showResults} />
    </div>
  )
}

export default connect(
  null
)(Location)
