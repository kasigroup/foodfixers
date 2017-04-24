import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import LocationForm from './LocationForm'
import { setOrderLocation } from '../actions/locationActions'

function saveLocation(values) {
  setOrderLocation(values);
}


const Location  = ({ deliveries , areas, showResults}) => {
  return (
    <div>
      <h3 className="title">Locations</h3>
      <LocationForm deliveries={deliveries} areas={areas} onSubmit={saveLocation}/>
    </div>
  )
}

export default connect(
  null
)(Location)
