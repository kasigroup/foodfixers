import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function deliveriesReducer(state = initialState.deliveries, action) {
  switch(action.type) {
    case types.LOAD_DELIVERIES_SUCCESS:
      return action.deliveries;
    default:
      return state;
  }
}
