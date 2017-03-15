import { combineReducers } from 'redux'
import products, * as fromProducts from './products'
import session, * as fromSession from './session'
import cart, * as fromCart from './cart'
import locations, * as fromLocations from './locations'
import areas, * as fromAreas from './areas'
import profile_data, * as fromProfile from './profile'
import { routerReducer } from 'react-router-redux'
import { reducer as form } from 'redux-form'

export default combineReducers({
  form,
  cart,
  session,
  locations,
  areas,
  profile_data,
  products,
  routing: routerReducer
})


// Cart reducing

const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)

export const getTotal = state =>
  getAddedIds(state)
    .reduce((total, id) =>
      total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(0)

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }))

export const getCartQuantity = state =>
  getAddedIds(state)
    .reduce((quantity, id) =>
      quantity + getQuantity(state, id),
      0
    )
    .toFixed(0)
