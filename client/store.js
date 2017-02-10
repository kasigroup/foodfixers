import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Import the root reducers
import rootReducer from './reducers/index';


// Create an object for default data

// const defaultState = {
//   accompaniments
// };

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );
//
// export default store;

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
