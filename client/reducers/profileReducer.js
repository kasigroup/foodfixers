import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function profileReducer(state = initialState.profile, action) {
  switch(action.type) {
    case types.LOAD_PROFILE_SUCCESS:
      return action.profile;
    default:
      return state;
  }
}
