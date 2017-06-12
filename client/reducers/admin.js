import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

const initialState = {
  orders: []
}


const loadedOrders = (state = initialState.orders, action) => {
  switch (action.type) {
    case types.LOAD_ADMIN_ORDERS_SUCCESS:
      console.log(action.orders)
      return action.orders
    default:
      return state
  }
}


// Puts everything together
const admin = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        orders: loadedOrders(state.orders, action)
      }
  }
}

export default admin
