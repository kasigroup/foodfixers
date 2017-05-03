import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

const byId = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_LOCATIONS_SUCCESS:
      console.log(action.locations)
      return {
        ...state,
        ...action.locations.reduce((obj, location) => {
          obj[location.id] = location
          return obj
        }, {})
      }
    default:
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_LOCATIONS_SUCCESS:
      return action.locations.map(location => location.id)
    default:
      return state
  }
}


export default combineReducers({
  byId,
  visibleIds
})

export const getLocation = (state, id) =>
  state.byId[id]

export const getVisibleLocations = state =>
  state.visibleIds.map(id => getLocation(state, id))
