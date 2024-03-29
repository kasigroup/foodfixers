import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

const byId = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_AREAS_SUCCESS:
      console.log(action.areas)
      return {
        ...state,
        ...action.areas.reduce((obj, area) => {
          obj[area.id] = area
          return obj
        }, {})
      }
    default:
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_AREAS_SUCCESS:
      return action.areas.map(area => area.id)
    default:
      return state
  }
}


export default combineReducers({
  byId,
  visibleIds
})


export const getArea = (state, id) =>
  state.byId[id]

export const getVisibleAreas = state =>
  state.visibleIds.map(id => getArea(state, id))
