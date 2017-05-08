import {
  REMOVE_FROM_CART,
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  SUBMIT_LOCATION
} from '../constants/ActionTypes'

import AnimateButton from '../globalFunctions/helpers';

const initialState = {
  addedIds: [],
  quantityById: {},
  choosenLocation: 0
}

// Adds location to cart
const addLocation = (state = initialState.choosenLocation, action) => {
  switch (action.type) {
    case SUBMIT_LOCATION:
        return action.values.location
    default:
      return state
  }
}


// Adds item to cart with id
const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      AnimateButton()
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
    case REMOVE_FROM_CART:
      return state.filter(productId => action.productId !== productId)
    default:
      return state
  }
}


// Adds quantity to the correct id
const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(`added product ${action.productId} to cart`)
      const { productId } = action
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }
    case REMOVE_FROM_CART:
      return { ...state,
        // This returns null - check if there is a better soloution
        [action.productId]: (state[productId]) - 1
      }
    default:
      return state
  }
}

// Gets how many is added to cart
export const getQuantity = (state, productId) => state.quantityById[productId] || 0

// get state of added Ids
export const getAddedIds = state => state.addedIds

// Puts everything together
const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      // console.log("Order in reducer: ")
      // console.log(action.order)
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
        choosenLocation: addLocation(state.choosenLocation, action)
      }
  }
}

export default cart
