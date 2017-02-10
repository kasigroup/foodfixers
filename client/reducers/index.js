import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import session from './sessionReducer';
import accompaniments from './accompanimentReducer';

const rootReducer = combineReducers({session, accompaniments, routing: routerReducer });

export default rootReducer;
