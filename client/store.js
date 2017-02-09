import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Import the root reducers
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// Create an object for default data
const defaultState = {
  posts,
  comments
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
