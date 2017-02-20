import initialState from './initialState';

// a reducer takes in two things:

// 1. The action (info about what happend)
// 2. Copy of current state

function orderReducer(state = initialState.order, action){
  switch (action.type) {
    case "ADD_ORDER":
      return [...state, {
        dish: action.dish.name,
        id: action.dish.id,
        price: action.dish.price
      }];
    default:
      return state;

  }
}

export default orderReducer;
