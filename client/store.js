import { createStore, compose , applyMiddleware} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
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
  rootReducer, applyMiddleware(thunk)
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
