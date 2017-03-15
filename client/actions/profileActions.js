import ApiRequest from '../api/Request';
import * as types from '../constants/ActionTypes'


export function loadProfileSuccess(profile) {
  return {
    type: types.LOAD_PROFILE_SUCCESS,
    profile: profile
  };
}

export function loadProfile() {
  const url = "profile";
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return ApiRequest.getAllItems(url).then(profile => {
      dispatch(loadProfileSuccess(profile));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadOrdersSuccess(orders) {
  return {
    type: types.LOAD_ORDERS_SUCCESS,
    orders: orders
  };
}

export function loadOrders() {
  const url = "orders";
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return ApiRequest.getAllItems(url).then(orders => {
      dispatch(loadOrdersSuccess(orders));
    }).catch(error => {
      throw(error);
    });
  };
}
