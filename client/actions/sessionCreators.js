import * as types from './actionTypes';
import sessionApi from '../api/SessionApi';
import registerApi from '../api/registerApi';

export function loginSuccess() {
  return {
    type: types.LOG_IN_SUCCESS
  }
}

export function logOutUser() {
  sessionStorage.removeItem('jwt');
  return {type: types.LOG_OUT}
}

export function logInUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      if (response === undefined) {
        console.log("not defined");
      }else {
        sessionStorage.setItem('jwt', response.jwt);
        dispatch(loginSuccess());
      }
    }).catch(error => {
      throw(error);
    });
  };
}

export function RegisterUser(account) {
  return function(dispatch) {
    return registerApi.register(account).then(response => {
    }).catch(error => {
      throw(error);
    });
  };
}
