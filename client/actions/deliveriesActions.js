import * as types from './actionTypes';
import deliveriesApi from '../api/deliveriesApi';

export function loadDeliveriesSuccess(deliveries) {
  return {type: types.LOAD_DELIVERIES_SUCCESS, deliveries};
}

export function loadDeliveries(url) {
  return function(dispatch) {
    return deliveriesApi.getDeliveries(url).then(deliveries => {
      console.log(deliveries);
      dispatch(loadDeliveriesSuccess(deliveries));
    }).catch(error => {
      throw(error);
    });
  };
}
