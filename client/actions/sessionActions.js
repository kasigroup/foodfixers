import ApiPostRequest from '../api/PostRequest'
import ApiRegisterRequest from '../api/RegisterRequest'
import * as types from '../constants/ActionTypes'
import { SubmissionError } from 'redux-form'

export function loginSuccess() {
  return {
    type: types.LOG_IN_SUCCESS
  }
}

export function registerSuccess() {
  return {
    type: types.REGISTER_SUCCESS
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

export function registerUser(values) {
  const url = "account";
  console.log(values)
  return function(dispatch) {
    return ApiRegisterRequest.register(url,values).then(response => {
      console.log(response)
      if (response.created_at) {
        dispatch(registerSuccess());
      }else {
        throw new SubmissionError({ email: "E-mail " + response.email, password: "Password " +response.password, _error: 'Register failed!' })
      }
    }).catch(error => {
      throw(error);
    });
  }
}
