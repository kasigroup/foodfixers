import * as types from './actionTypes';
import dishesApi from '../api/dishesApi';

export function loadDishesSuccess(dishes) {
  return {type: types.LOAD_DISHES_SUCCESS, dishes};
}

export function loadDishes() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return dishesApi.getAllDishes().then(dishes => {
      console.log(dishes);
      dispatch(loadDishesSuccess(dishes));
    }).catch(error => {
      throw(error);
    });
  };
}
