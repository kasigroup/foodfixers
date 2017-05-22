import { combineReducers } from 'redux';
import {
  LOAD_CATEGORIES_SUCCESS
} from '../constants/ActionTypes';

const byId = (state = {}, action) => {
  switch(action.type) {
    case LOAD_CATEGORIES_SUCCESS:
      console.log(action.categories)
      return {
        ...state,
        ...action.categories.reduce((obj, cat) => {
          obj[cat.id] = cat
          return obj
        }, {})
      }
    default:
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case LOAD_CATEGORIES_SUCCESS:
      return action.categories.map(cat => cat.id)
    default:
      return state
  }
}


export default combineReducers({
  byId,
  visibleIds
})

export const getCategories = (state, id) =>
  state.byId[id]

export const getVisibleCategories = state =>
  state.visibleIds.map(id => getCategories(state, id))
