import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import LocationForm from './LocationForm'
import { setOrderLocation } from '../actions/locationActions'

function saveLocation(values) {
  setOrderLocation(values);
}


const Location  = ({ locations , showResults}) => {
  return (
    <div>
      <h3 className="title">Locations</h3>
      <LocationForm locations={locations} onSubmit={saveLocation}/>
    </div>
  )
}

export default connect(
  null
)(Location)
