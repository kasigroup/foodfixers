import * as types from './actionTypes';
import CreateProfileApi from '../api/CreateProfileApi';

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
