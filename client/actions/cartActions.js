import ApiOrderRequest from '../api/OrderRequest';
import * as types from '../constants/ActionTypes'

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
      if (!response) {
        console.log("no response")
      }else {
        console.log(response)
        // Dispatches checkoutRequest and sends order to reducer
        dispatch(checkoutRequest(order));
      }
      }).catch(error => {
        throw(error);
      });
  };
}
