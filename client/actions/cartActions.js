import ApiOrderRequest from '../api/OrderRequest';
import * as types from '../constants/ActionTypes'
import {addNotification} from './notificationActions'

export function checkoutRequest(order) {
  return {
    type: types.CHECKOUT_REQUEST,
    order
  };
}

export function saveLocation(values) {
  return {
    type: types.SUBMIT_LOCATION,
    values
  };
}



export function checkout(orderFormatted, total, token, choosenLocation) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch, getState) {

    // String to int
    const totalInt = parseInt(total)
    const choosenLocationInt = parseInt(choosenLocation)

    // Creating order object
    const order = {
      total: totalInt,
      currency: "sek",
      delivery_id: choosenLocationInt,
      items_attributes:orderFormatted
    }

    console.log(order)

    // Sends order object to server
    return ApiOrderRequest.sendOrder(order, token).then(response => {
      if (response) {
        dispatch(checkoutRequest(order));
        dispatch(addNotification("You just ordered!","success"))
      }else {
        console.log("no response on order")
      }

      }).catch(error => {
        throw(error);
      });
  };
}
