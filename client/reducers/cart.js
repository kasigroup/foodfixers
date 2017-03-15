import {
  REMOVE_FROM_CART,
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  SET_LOCATION
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {},
  location: {}
}

// Adds item to cart with id
const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
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

// Adds location to cart
const setLocation = (state = initialState.location, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return [ ...state, action.location ]
    default:
      return state
  }
}

// Adds quantity to the correct id
const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(action.productId)
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
        location: setLocation(state.location, action)
      }
  }
}

export default cart
