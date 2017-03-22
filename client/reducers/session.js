import * as types from '../constants/ActionTypes'

export default function sessionReducer(state = {}, action ) {
  switch(action.type) {
    case types.REGISTER_SUCCESS:
      console.log("registered")
      return state;
    case types.LOG_IN_SUCCESS:
      console.log("loggedin")
      return !!sessionStorage.jwt
    default:
      return state;
  }
}
