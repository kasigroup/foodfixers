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

// Moment
import moment from 'moment';
moment.locale("sv");

import {addLocaleData,IntlProvider} from 'react-intl';
import svLocaleData from 'react-intl/locale-data/sv';
addLocaleData(svLocaleData);

import reducer from './reducers'

import { Router, Route, browserHistory,IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'

// Import css
import css from './styles/style.styl';

// Import Components
import App from './containers/App';
import FrontPage from './containers/FrontPage';
import HomeContainer from './containers/HomeContainer';
import SideDishesContainer from './containers/SideDishesContainer';
import CartContainer from './containers/CartContainer';
import ProfileContainer from './containers/ProfileContainer';
import CategoriesContainer from './containers/CategoriesContainer';
import ProductView from './containers/ProductView';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import AllergiesContainer from './containers/AllergiesContainer';
import AboutContainer from './containers/AboutContainer';
import StopsContainer from './containers/StopsContainer';
import AdminContainer from './containers/AdminContainer';
import NotFound from './containers/NotFound';
import CreateProfileContainer from './containers/CreateProfileContainer';
FrontPage

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);



const middleware = routerMiddleware(browserHistory)
const store = createStore(
  reducer,
  enhancers,
  applyMiddleware(thunk, middleware)
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

// Check if logged in
if (sessionStorage.jwt) {
  store.dispatch(loginSuccess())
}else {
  console.log("not logged in")
}


const Root = () => {
  return(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App} >
          <Route path="login" component={LoginContainer} />
          <Route path="register" component={RegisterContainer} />
          <Route path="createprofile" component={CreateProfileContainer} />
          <Route path="about" component={AboutContainer} />
          <Route path="stops" component={StopsContainer} />
          <Route path="allergies" component={AllergiesContainer} />
          <IndexRoute component={FrontPage} />
          <Route path="categories" component={CategoriesContainer} onEnter={requireAuth}/>
          <Route path="sidedishes" component={SideDishesContainer} onEnter={requireAuth}/>
          <Route path="profile" component={ProfileContainer} onEnter={requireAuth}/>
          <Route path="categories" component={CategoriesContainer} onEnter={requireAuth}/>
          <Route path="category/:id" component={HomeContainer} onEnter={requireAuth} />
          <Route path="cart" component={CartContainer} onEnter={requireAuth}/>
          <Route path="admin" component={AdminContainer} onEnter={requireAuth}/>
          <Route path="product/:id" component={ProductView} onEnter={requireAuth} />
          <Route path='*' component={NotFound} />
        </Route>
       </Router>
     </Provider>
  )
}

function requireAuth(nextState, replace) {
  const { profile_data } = store.getState()
  if (!sessionStorage.jwt) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}


render(<IntlProvider locale="sv"><Root /></IntlProvider>, document.getElementById('root'));
