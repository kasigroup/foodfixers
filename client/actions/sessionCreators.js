import * as types from './actionTypes';
import sessionApi from '../api/SessionApi';
import registerApi from '../api/registerApi';
import CreateProfileApi from '../api/CreateProfileApi';
import GetProfileApi from '../api/GetProfileApi';

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

export function registerUser(account) {
  return function(dispatch) {
    return registerApi.register(account).then(response => {
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadProfileSuccess(profile) {
  return {type: types.LOAD_PROFILE_SUCCESS, profile};
}

export function createProfile(profile) {
  return function(dispatch) {
    return CreateProfileApi.createProfile(profile).then(response => {
      if (response === undefined) {
        console.log("not defined");
      }else {
        sessionStorage.setItem('profile', response);
      }
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadProfile() {
  return function(dispatch) {
    return GetProfileApi.getProfile().then(profile => {
      dispatch(loadProfileSuccess(profile));
    }).catch(error => {
      throw(error);
    });
  };
}
