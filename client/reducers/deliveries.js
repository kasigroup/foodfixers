import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

const byId = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_DELIVERIES_SUCCESS:
      console.log(action.deliveries)
      return {
        ...state,
        ...action.deliveries.reduce((obj, delivery) => {
          obj[delivery.id] = delivery
          return obj
        }, {})
      }
    default:
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_DELIVERIES_SUCCESS:
      return action.deliveries.map(delivery => delivery.id)
    default:
      return state
  }
}


export default combineReducers({
  byId,
  visibleIds
})


export const getDelivery = (state, id) =>
  state.byId[id]

export const getVisibleDeliveries = state =>
  state.visibleIds.map(id => getDelivery(state, id))
