import * as APIUtil from '../util/search_api_util'; 

export const RECEIVE_SEARCH_RESTAURANTS = 'RECEIVE_SEARCH_RESTAURANTS'; 
export const REQUEST_SEARCH_RESTAURANTS = 'REQUEST_SEARCH_RESTAURANTS';

export const getSearchRestaurants = searchTerm => dispatch => {
    return APIUtil.getSearchRestaurants(searchTerm)
    .then(restaurants => dispatch(receiveSearchRestaurants(restaurants.data)))
}

export const receiveSearchRestaurants = restaurants => {
    return {
        type: RECEIVE_SEARCH_RESTAURANTS,
        restaurants
    }
};

