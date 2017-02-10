import * as types from './actionTypes';
import accompanimentApi from '../api/accompanimentApi';

export function loadAccompanimentSuccess(accompaniments) {
  return {type: types.LOAD_ACCOMPANIMENT_SUCCESS, accompaniments};
}

export function loadAccompaniments() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return accompanimentApi.getAllAccompaniments().then(accompaniments => {
      dispatch(loadAccompanimentSuccess(accompaniments));
      // console.log(accompaniments)
    }).catch(error => {
      throw(error);
    });
  };
}
