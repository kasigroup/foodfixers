import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { logInUser } from '../actions/sessionActions'



const Login  = ({props, logInUser}) => {

  return (
    <div>
      <h3>Login Form</h3>
      <LoginForm login={logInUser}/>
    </div>
  )
}

export default connect(
  null, { logInUser }
)(Login)
