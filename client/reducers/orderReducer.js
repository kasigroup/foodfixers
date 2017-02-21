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
    case "REMOVE_ORDER":
      console.log(`Removing: ${action.index}`);

      return [
        ...state.slice(0,action.index),

        ...state.slice(action.index + 1)
      ]
    default:
      return state;

  }
}

export default orderReducer;
