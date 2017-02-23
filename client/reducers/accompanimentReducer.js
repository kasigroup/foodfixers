import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function accompanimentReducer(state = initialState.sideDishes, action) {
  switch(action.type) {
    case types.LOAD_ACCOMPANIMENT_SUCCESS:
      console.log("Loaded");
      return action.accompaniments;
    default:
      return state;
  }
}
