import * as types from './actionTypes';
import accompanimentApi from '../api/accompanimentApi';

export function loadAccompanimentSuccess(accompaniment) {
  return {type: types.LOAD_ACCOMPANIMENT_SUCCESS, accompaniment};
}

export function loadAccompaniments() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return accompanimentApi.getAllAccompaniments().then(accompaniment => {
      dispatch(loadAccompanimentSuccess(accompaniment));
    }).catch(error => {
      throw(error);
    });
  };
}
