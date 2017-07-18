import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { logInUser } from '../actions/sessionActions'



const Login  = ({props, logInUser, email}) => {

  return (
    <div>
      <div className="form-head">
        <h3>SIGN IN</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
      </div>
      {email ? <p>Registrerade med {email}</p> : null}
      <LoginForm login={logInUser}/>
    </div>
  )
}

const mapStateToProps = state => ({
  email: state.session.email
})

export default connect(
  mapStateToProps, { logInUser }
)(Login)
