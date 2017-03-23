import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import { Redirect } from 'react-router-dom'

const LoginContainer = ({ session }) => {

  const { from } = { from: { pathname: '/home' } }

  if (session === true) {
     return (
       <Redirect to={from}/>
     )
 }

 return (
   <Login>
   </Login>
  )

}

const mapStateToProps = state => ({
  session: state.session
})

export default connect(
  mapStateToProps,
)(LoginContainer)
