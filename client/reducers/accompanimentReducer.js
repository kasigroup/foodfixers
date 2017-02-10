import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function accompanimentReducer(state = initialState.accompaniments, action) {
  switch(action.type) {
    case types.LOAD_ACCOMPANIMENT_SUCCESS:
      return action.accompaniments
    default:
      return state;
  }
}
