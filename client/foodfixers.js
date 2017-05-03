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

import {addLocaleData,IntlProvider} from 'react-intl';
import svLocaleData from 'react-intl/locale-data/sv';
addLocaleData(svLocaleData);

import reducer from './reducers'

import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'

// Import css
import css from './styles/style.styl';

// Import Components
import App from './containers/App';
import HomeContainer from './containers/HomeContainer';
import SideDishesContainer from './containers/SideDishesContainer';
import CartContainer from './containers/CartContainer';
import ProfileContainer from './containers/ProfileContainer';
import ProductView from './containers/ProductView';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import AdminContainer from './containers/AdminContainer';
import CreateProfileContainer from './containers/CreateProfileContainer';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
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
          <Route path="home" component={HomeContainer} onEnter={requireAuth}/>
          <Route path="sidedishes" component={SideDishesContainer} onEnter={requireAuth}/>
          <Route path="profile" component={ProfileContainer} onEnter={requireAuth}/>
          <Route path="cart" component={CartContainer} onEnter={requireAuth}/>
          <Route path="admin" component={AdminContainer} onEnter={requireAuth}/>
          <Route path="product/:id" component={ProductView} onEnter={requireAuth}/>
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
  }else if(profile_data.profile.created) {
    replace({
      pathname: '/createprofile',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

render(<IntlProvider locale="sv"><Root /></IntlProvider>, document.getElementById('root'));
