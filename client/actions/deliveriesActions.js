import ApiRequest from '../api/Request';
import * as types from '../constants/ActionTypes'

export function loadDeliveriesSuccess(deliveries) {
  return {
    type: types.LOAD_DELIVERIES_SUCCESS,
    deliveries: deliveries
  };
}

export function loadDeliveries() {
  const url = "deliveries";
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return ApiRequest.getAllItems(url).then(deliveries => {
      dispatch(loadDeliveriesSuccess(deliveries));
    }).catch(error => {
      throw(error);
    });
  };
}
