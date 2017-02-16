import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function dishesReducer(state = initialState.dishes, action) {
  switch(action.type) {
    case types.LOAD_DISHES_SUCCESS:
      console.log("Loaded");
      return action.dishes;
    default:
      return state;
  }
}
