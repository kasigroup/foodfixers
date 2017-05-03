import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

const byId = (state = {}, action) => {
  switch(action.type) {
    case types.LOAD_SIDE_DISHES_SUCCESS:
      console.log(action.sideDishes)
      return {
        ...state,
        ...action.sideDishes.reduce((obj, dish) => {
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
    case types.LOAD_SIDE_DISHES_SUCCESS:
      return action.sideDishes.map(dish => dish.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getSideDishes = (state, id) =>
  state.byId[id]

export const getVisibleSideDishes = state =>
  state.visibleIds.map(id => getSideDishes(state, id))
