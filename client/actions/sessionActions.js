import ApiPostRequest from '../api/PostRequest';
import * as types from '../constants/ActionTypes'
import { SubmissionError } from 'redux-form'

export function loginSuccess() {
  return {
    type: types.LOG_IN_SUCCESS
  }
}

export function logInUser(values) {
  const url = "account_token";
  return function(dispatch) {
    return ApiPostRequest.login(url,values).then(response => {
      if (response === undefined) {
         console.log("sometinh wrong")
         throw new SubmissionError({ _error: 'User does not exist or Bad password' })
       }else {
        sessionStorage.setItem('jwt', response.jwt);
        dispatch(loginSuccess());
      }
    }).catch(error => {
      throw(error);
    });
  }
}
