import * as types from '../constants/ActionTypes'

export default function sessionReducer(state = {}, action ) {
  switch(action.type) {
    case types.LOG_OUT_SUCCESS:
      sessionStorage.removeItem('jwt')
      return !!sessionStorage.jwt
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
