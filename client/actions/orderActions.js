import * as types from './actionTypes';

export function addToOrder(index, dish) {
  return {
    type: types.ADD_ORDER,
    index,
    dish
  }
}
