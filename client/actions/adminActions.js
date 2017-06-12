import ApiRequest from '../api/Request';
import * as types from '../constants/ActionTypes'

export function loadAdminOrdersSuccess(orders) {
  return {
    type: types.LOAD_ADMIN_ORDERS_SUCCESS,
    orders: orders
  };
}

export function loadAdminOrders(year,week) {
  const url = `admin/orders?${year + "&" + week}`;
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return ApiRequest.getAllItems(url).then(orders => {
      dispatch(loadAdminOrdersSuccess(orders));
    }).catch(error => {
      throw(error);
    });
  };
}
