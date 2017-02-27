import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function deliveriesReducer(state = initialState.locations, action) {
  switch(action.type) {
    case types.LOAD_LOCATIONS_SUCCESS:
      return action.locations;
    default:
      return state;
  }
}
