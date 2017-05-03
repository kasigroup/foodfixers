import ApiRequest from '../api/Request';
import * as types from '../constants/ActionTypes'


export function loadDishesSuccess(dishes) {
  return {
    type: types.LOAD_DISHES_SUCCESS,
    dishes: dishes
  };
}

export function loadSideDishesSuccess(sideDishes) {
  return {
    type: types.LOAD_SIDE_DISHES_SUCCESS,
    sideDishes: sideDishes
  };
}

export function loadDishes() {
  const url = "dishes";
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return ApiRequest.getAllItems(url).then(dishes => {
      dispatch(loadDishesSuccess(dishes));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadSideDishes() {
  const url = "side_dishes";
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return ApiRequest.getAllItems(url).then(sideDishes => {
      dispatch(loadSideDishesSuccess(sideDishes));
    }).catch(error => {
      throw(error);
    });
  };
}


export function addToCart(productId){
  return {
    type: types.ADD_TO_CART,
    productId
  };
}

export function removeFromCart(productId){
  return {
    type: types.REMOVE_FROM_CART,
    productId
  };
}
