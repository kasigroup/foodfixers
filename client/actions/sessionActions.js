import ApiPostRequest from '../api/PostRequest'
import ApiRegisterRequest from '../api/RegisterRequest'
import ApiCreateProfileRequest from '../api/CreateProfileRequest'
import ApiRequest from '../api/Request';
import * as types from '../constants/ActionTypes'
import { SubmissionError } from 'redux-form'
import { push } from 'react-router-redux'
import {addNotification} from './notificationActions'

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

export function loadAccountSuccess(account) {
  return {
    type: types.LOAD_ACCOUNT_SUCCESS,
    account: account
  };
}

export function createProfileSuccess() {
  return {
    type: types.CREATE_PROFILE_SUCCESS,
    created: true
  }
}

export function logInUser(values) {
  const url = "account_token";
  return function(dispatch) {
    return ApiPostRequest.login(url,values).then(response => {
      if (response === undefined) {
         dispatch(addNotification("User does not exist or Bad password","error"));
        //  throw new SubmissionError({ _error: 'User does not exist or Bad password' })
       }else {
        sessionStorage.setItem('jwt', response.jwt);
        dispatch(push("/"));
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
      dispatch(push("/"));
      dispatch(addNotification("Created Profile!","success"));
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
        dispatch(push("/login"));
        dispatch(registerSuccess());
        dispatch(addNotification("Register Success!","success"));
      }else {
        throw new SubmissionError({ email: "E-mail " + response.email, password: "Password " + response.password, _error: 'Register failed!' })
      }
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadAccount(values) {
  const url = "account";
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return ApiRequest.getAllItems(url).then(account => {
      dispatch(loadAccountSuccess(account));
    }).catch(error => {
      throw(error);
    });
  };
}
