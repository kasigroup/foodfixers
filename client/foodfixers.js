import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import App from './containers/App';
import Home from './containers/Home';
import LoginPage from './containers/loginPage';
import RegisterPage from './containers/RegisterPage';
import CreateProfilePage from './containers/CreateProfilePage';
import NotFound from './containers/NotFound';
import LandingPage from './containers/LandingPage';
import ProductPage from './containers/ProductPage';
import OrderPage from './containers/OrderPage';
import ProfilePage from './containers/ProfilePage';
import ProductSingle from './containers/ProductSingle';

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
          <Route path="/createprofile" component={CreateProfilePage} onEnter={requireAuth}/>
          <Route path="/home" component={App} onEnter={requireAuth}>
            <IndexRoute component={ProductPage}/>
            <Route path="/product/:id" component={ProductSingle}/>
            <Route path="/cart" component={OrderPage}/>
            <Route path="/profile" component={ProfilePage}/>
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
