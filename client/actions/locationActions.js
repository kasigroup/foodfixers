import ApiRequest from '../api/Request';
import * as types from '../constants/ActionTypes'

export function loadLocationsSuccess(locations) {
  return {
    type: types.LOAD_LOCATIONS_SUCCESS,
    locations: locations
  };
}

export function loadLocation() {
  const url = "delivery_locations";
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return ApiRequest.getAllItems(url).then(locations => {
      dispatch(loadLocationsSuccess(locations));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadAreasSuccess(areas) {
  return {
    type: types.LOAD_AREAS_SUCCESS,
    areas: areas
  };
}

export function loadAreas() {
  const url = "delivery_areas";
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return ApiRequest.getAllItems(url).then(areas => {
      dispatch(loadAreasSuccess(areas));
    }).catch(error => {
      throw(error);
    });
  };
}
