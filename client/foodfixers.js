import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Home from './components/Home';
import LoginPage from './components/loginPage';

// Import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store';

import { loadAccompaniments } from './actions/accompanimentActions';

const store = configureStore();


const Root = () => {
  return(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/home" component={Home} onEnter={requireAuth} />
          <Route path="/login" component={LoginPage} />
        </Route>
      </Router>
    </Provider>
  )
}

function requireAuth(nextState, replace) {
  if (!sessionStorage.jwt) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

render(<Root />, document.getElementById('root'));
