import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import RegisterForm from './RegisterForm'
import { registerUser } from '../actions/sessionActions'



const Register  = ({props, registerUser}) => {

  return (
    <div>
      <div className="form-head">
        <h3>REGISTER</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
      </div>
      <RegisterForm register={registerUser} />
    </div>
  )
}

export default connect(
  null, { registerUser }
)(Register)
