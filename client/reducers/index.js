import { combineReducers } from 'redux'
import products, * as fromProducts from './products'
import sideDishes, * as fromSidedishes from './sidedishes'
import session, * as fromSession from './session'
import cart, * as fromCart from './cart'
import url, * as fromUrl from './url'
import locations, * as fromLocations from './locations'
import areas, * as fromAreas from './areas'
import notifications from './notifications';
import categories from './categories';
import deliveries, * as fromDeliveries from './deliveries'
import profile_data, * as fromProfile from './profile'
import { routerReducer } from 'react-router-redux'
import { reducer as form } from 'redux-form'

export default combineReducers({
  form,
  cart,
  session,
  areas,
  url,
  categories,
  notifications,
  deliveries,
  profile_data,
  products,
  sideDishes,
  routing: routerReducer
})


// Cart reducing

const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)
const getSideDishes = (state, id) => fromSidedishes.getSideDishes(state.sideDishes, id)

// export const getTotal = state =>
//   getAddedIds(state)
//     .reduce((total, id) =>
//       total + getProduct(state, id).price * getQuantity(state, id),
//       0
//     )
//     .toFixed(0)

export const getTotal = state =>
  getAddedIds(state).reduce(function (total, id) {
    if (typeof getProduct(state, id) !== 'undefined' && getProduct(state, id).price) {
      return total + getProduct(state, id).price * getQuantity(state, id);
    }else {
      return total + getSideDishes(state, id).price * getQuantity(state, id);
    }
  }, 0).toFixed(0);

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    ...getSideDishes(state, id),
    quantity: getQuantity(state, id)
  }))


export const getOrder = state =>
  getAddedIds(state).map(id => ({
    product_id: id,
    quantity: getQuantity(state, id)
  }))

export const getCartQuantity = state =>
  getAddedIds(state)
    .reduce((quantity, id) =>
      quantity + getQuantity(state, id),
      0
    )
    .toFixed(0)
