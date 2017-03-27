import ApiPostRequest from '../api/PostRequest'
import ApiRegisterRequest from '../api/RegisterRequest'
import ApiCreateProfileRequest from '../api/CreateProfileRequest'
import * as types from '../constants/ActionTypes'
import { SubmissionError } from 'redux-form'
import { push } from 'react-router-redux'

export function loginSuccess() {
  return {
    type: types.LOG_IN_SUCCESS
  }
}

export function logOutSuccess() {
  return {
    type: types.LOG_OUT_SUCCESS
  }
}

export function registerSuccess() {
  return {
    type: types.REGISTER_SUCCESS
  }
}

export function createProfileSuccess() {
  return {
    type: types.CREATE_PROFILE_SUCCESS
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
        dispatch(push("/home"));
        dispatch(loginSuccess());
      }
    }).catch(error => {
      throw(error);
    });
  }
}

export function createProfile(values) {
  const url = "profile";
  console.log(values)
  return function(dispatch) {
    return ApiCreateProfileRequest.create(url,values).then(response => {
      console.log(response)
      dispatch(createProfileSuccess());
    }).catch(error => {
      throw(error);
    });
  }
}

export function logOutUser() {
  return function(dispatch) {
    console.log("logginout")
    dispatch(push("/login"));
    dispatch(logOutSuccess());
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
        throw new SubmissionError({ email: "E-mail " + response.email, password: "Password " + response.password, _error: 'Register failed!' })
      }
    }).catch(error => {
      throw(error);
    });
  }
}
