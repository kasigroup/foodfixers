import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

const initialState = {
  account: {}
}

export default function account(state = initialState.account, action){
  switch (action.type) {
    case types.LOAD_ACCOUNT_SUCCESS:
      console.log(action.account)
      return action.account
    default:
      return state
  }
}
