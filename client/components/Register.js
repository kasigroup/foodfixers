import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import RegisterForm from './RegisterForm'
import { registerUser } from '../actions/sessionActions'



const Register  = ({props, registerUser}) => {

  return (
    <div>
      <h3>Register Form</h3>
      <RegisterForm register={registerUser} />
    </div>
  )
}

export default connect(
  null, { registerUser }
)(Register)
