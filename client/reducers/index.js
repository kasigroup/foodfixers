import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import session from './sessionReducer';
import accompaniments from './accompanimentReducer';
import dishes from './dishesReducer';

const rootReducer = combineReducers({session, accompaniments, dishes, routing: routerReducer });

export default rootReducer;
