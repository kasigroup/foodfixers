import ApiOrderRequest from '../api/OrderRequest';
import * as types from '../constants/ActionTypes'

export function checkoutRequest(order) {
  return {
    type: types.CHECKOUT_REQUEST,
    order
  };
}


export function checkout(products, total, token) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch, getState) {

    // Getting cart state
    const { cart,form } = getState()

    // Gets location from form
    // const location = form.location.values.location
    //
    // console.log(location);
    console.log("CHECKING OOOUT");

    // Creating order object
    const order = {
      price: total,
      currency: "SEK",
      delivery_id: 1,
      items_attributes:[cart.addedIds, cart.quantityById]
    }

    console.log(order)

    // Sends order object to server
    return ApiOrderRequest.sendOrder(order, token).then(response => {
        // Dispatches checkoutRequest and sends order to reducer
        dispatch(checkoutRequest(order));
      }).catch(error => {
        throw(error);
      });
  };
}
