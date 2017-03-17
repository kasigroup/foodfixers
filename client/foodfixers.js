import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { loadDishes } from './actions/productActions'
import { loadLocation } from './actions/locationActions'
import { loadAreas } from './actions/locationActions'
import { loadProfile, loadOrders } from './actions/profileActions'
import { loginSuccess } from './actions/sessionActions'


import reducer from './reducers'

// import { Router, Route, browserHistory } from 'react-router'
import { BrowserRouter as Router, Route, Redirect, withRouter, Link } from 'react-router-dom'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// Import css
import css from './styles/style.styl';

// Import Components
import App from './containers/App';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import ProfileContainer from './containers/ProfileContainer';
import NavBar from './containers/NavBar';
import ProductView from './containers/ProductView';
import LoginContainer from './containers/LoginContainer';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);


// Create store
const middleware = [ thunk ];
const store = createStore(
  reducer,
  enhancers,
  applyMiddleware(...middleware)
)

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store)

// Check if logged in
if (sessionStorage.jwt) {
  store.dispatch(loginSuccess())

  // Gets all products
  store.dispatch(loadDishes())

  // Gets all locations
  store.dispatch(loadLocation())

  // Gets all areas
  store.dispatch(loadAreas())

  // Gets profile
  store.dispatch(loadProfile())
  store.dispatch(loadOrders())

}else {
  console.log("not logged in")
}



const Root = () => {
  return(
    <Provider store={store}>
      <Router>
        <div>

            <NavBar />

            <Route exact path="/" component={App} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/home" component={ProductsContainer} />
            <Route path="/profile" component={ProfileContainer} />
            <Route path="/product/:id" component={ProductView} />
            <Route path="/cart" component={CartContainer} />

        </div>
       </Router>
    </Provider>
  )
}


render(<Root />, document.getElementById('root'));
