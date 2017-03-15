import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../reducers/products'
import { addToCart } from '../actions/productActions'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'


const Login = () => (
  <h3>Login</h3>
)

export default Login
