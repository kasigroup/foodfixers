import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { browserHistory } from 'react-router';

export default function profileReducer(state = initialState.profile, action) {
  switch(action.type) {
    case types.CREATE_PROFILE_SUCCESS:
      browserHistory.push('/')
      return state;
    case types.LOAD_PROFILE_MISSING:
      browserHistory.push('/createprofile')
      return state;
    case types.LOAD_PROFILE_SUCCESS:
      return action.profile;
    default:
      return state;
  }
}
