import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { logInUser } from '../actions/sessionActions'



const Login  = ({props, logInUser, email}) => {

  return (
    <div>
      <div className="form-head">
        <h3>Logga in</h3>
        <p>Logga in eller skapa ett nytt användarkonto genom länken nedanför.</p>
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
