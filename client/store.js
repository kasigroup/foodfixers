import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

// Import the root reducers
import rootReducer from './reducers/index';


export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
