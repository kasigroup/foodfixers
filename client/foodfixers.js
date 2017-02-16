import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Home from './components/Home';
import LoginPage from './components/loginPage';
import RegisterPage from './components/RegisterPage';
import CreateProfilePage from './components/CreateProfilePage';
import NotFound from './components/NotFound';
import LandingPage from './components/LandingPage';
import ProductPage from './components/ProductPage';
import Product from './components/Product';
import ProductSingle from './components/ProductSingle';

// Import react router deps
import { Router, Route, IndexRoute, browserHistory, Miss } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store';

import { loadAccompaniments } from './actions/accompanimentActions';

const store = configureStore();


const Root = () => {
  return(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={LandingPage} onEnter={checkAuth}/>
          <Route path="/login" component={LoginPage} onEnter={checkAuth}/>
          <Route path="/register" component={RegisterPage} onEnter={checkAuth}/>
          <Route path="/createprofile" component={CreateProfilePage} onEnter={checkAuth}/>
          <Route path="/home" component={App} onEnter={requireAuth}>
            <IndexRoute component={ProductPage}></IndexRoute>
            <Route path="/product/:id" component={ProductSingle}/>
          </Route>
        <Route />
        <Route path="*" component={NotFound}/>
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

function checkAuth(nextState, replace) {
  if (sessionStorage.jwt) {
    replace({
      pathname: '/home',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

render(<Root />, document.getElementById('root'));
