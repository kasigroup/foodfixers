import ApiPostRequest from '../api/PostRequest';
import * as types from '../constants/ActionTypes'

export function loginSuccess() {
  return {
    type: types.LOG_IN_SUCCESS
  }
}

export function logInUser() {
  const url = "account_token";
  return function(dispatch) {
    return ApiPostRequest.login(url).then(response => {
        sessionStorage.setItem('jwt', response.jwt);
        dispatch(loginSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}
