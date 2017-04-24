import React from 'react'
import { connect } from 'react-redux'
import CreateProfileForm from './CreateProfileForm'
import { createProfile } from '../actions/sessionActions'



const CreateProfile  = ({props, createProfile}) => {

  return (
    <div>
      <h3>Create Profile</h3>
      <CreateProfileForm create={ createProfile }/>
    </div>
  )
}

export default connect(
  null, { createProfile }
)(CreateProfile)
