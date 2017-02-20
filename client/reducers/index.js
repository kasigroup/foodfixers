import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import session from './sessionReducer';
import accompaniments from './accompanimentReducer';
import dishes from './dishesReducer';
import order from './orderReducer';

const rootReducer = combineReducers({session, accompaniments, dishes, order, routing: routerReducer });

export default rootReducer;
