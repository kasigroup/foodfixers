import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import session from './sessionReducer';
import accompaniments from './accompanimentReducer';
import dishes from './dishesReducer';
import order from './orderReducer';
import profile from './profileReducer';
import deliveries from './deliveriesReducer';

const rootReducer = combineReducers({session, accompaniments, dishes, profile, order, deliveries, routing: routerReducer, form: formReducer });

export default rootReducer;
