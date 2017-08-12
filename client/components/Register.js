import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import RegisterForm from './RegisterForm'
import { registerUser } from '../actions/sessionActions'



const Register  = ({props, registerUser}) => {

  return (
    <div>
      <div className="form-head">
        <h3>Logga in</h3>
        <p>Skapa ett nytt konto genom länken under.</p>
      </div>
      <RegisterForm register={registerUser} />
    </div>
  )
}

export default connect(
  null, { registerUser }
)(Register)
