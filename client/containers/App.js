import React from 'react'
import { connect } from 'react-redux'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import LocationContainer from './LocationContainer'
import { logInUser } from '../actions/sessionActions'


const App = ({logInUser}) => (
  <div>
    <button className="btn btn-primary" onClick={() => logInUser()}>Press then refresh</button>
  </div>
)

export default connect(
  null,{ logInUser }
)(App)
