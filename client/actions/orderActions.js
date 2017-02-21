import * as types from './actionTypes';
import orderApi from '../api/orderApi';

export function addToOrder(index, dish) {
  return {
    type: types.ADD_ORDER,
    index,
    dish
  }
}

export function removeFromOrder(index) {
  return {
    type: types.REMOVE_ORDER,
    index
  }
}

export function sendOrder(order) {
  return function(dispatch) {
    return orderApi.sendOrder(order).then(response => {
      if (response === undefined) {
        console.log("not defined");
      }else {
        console.log("dispatch sucess")
      }
    }).catch(error => {
      throw(error);
    });
  };
}
