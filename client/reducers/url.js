import {
    LOCATION_CHANGE
} from 'react-router-redux';

const initialState = {
  urlParams: {}
}

// Adds location to cart
const addUrl = (state = initialState.urlParams, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return action.payload.pathname
      return state
    default:
      return state
  }
}

// Puts everything together
const url = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        urlParams: addUrl(state.urlParams, action)
      }
  }
}

export default url
