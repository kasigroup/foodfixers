import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

const byId = (state = {}, action) => {
  switch(action.type) {
    case types.LOAD_DISHES_SUCCESS:
      console.log(action.dishes)
      return {
        ...state,
        ...action.dishes.reduce((obj, dish) => {
          obj[dish.id] = dish
          return obj
        }, {})
      }
    default:
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_DISHES_SUCCESS:
      return action.dishes.map(dish => dish.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getProduct = (state, id) =>
  state.byId[id]

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id))
