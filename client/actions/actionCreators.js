import * as types from './actionTypes';
import sessionApi from '../api/SessionApi';

export function loginSuccess() {
  return {
    type: types.LOG_IN_SUCCESS
  }
}

export function logInUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      var array = Object.keys(credentials).map(key => credentials[key])
      console.log(`LoginUser ran without error`);
      console.log(`The Credentials passed is: ${array}`);
    }).catch(error => {
      throw(error);
    });
  };
}
