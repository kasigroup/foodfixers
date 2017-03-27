import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

const initialState = {
  profile: {},
  orders: []
}


const loadedOrders = (state = initialState.orders, action) => {
  switch (action.type) {
    case types.LOAD_ORDERS_SUCCESS:
      console.log(action.orders)
      return action.orders
    default:
      return state
  }
}

const loadedProfile = (state = initialState.profile, action) => {
  switch (action.type) {
    case types.LOAD_PROFILE_SUCCESS:
      console.log(action.profile)
      return action.profile
    default:
      return state
  }
}


// Puts everything together
const profile = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        profile: loadedProfile(state.profile, action),
        orders: loadedOrders(state.orders, action)
      }
  }
}

export default profile
