import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'


const Login  = () => {
  return (
    <div>
      <h3>Login Form</h3>
      <LoginForm />
    </div>
  )
}

export default connect(
  null
)(Login)
