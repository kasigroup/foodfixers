import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

// Import the root reducers
import rootReducer from './reducers/index';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default function configureStore() {
  return createStore(
    rootReducer,
    enhancers,
    applyMiddleware(thunk)
  );
}
