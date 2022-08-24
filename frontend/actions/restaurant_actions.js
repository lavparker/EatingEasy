import * as APIUtil from "../util/restaurant_api_util"; 

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT"; 

const receiveRestaurants = restaurants => ({
    type: RECEIVE_RESTAURANTS, 
    restaurants
})

const receiveRestaurant = restaurant => ({
    type: RECEIVE_RESTAURANT,
    restaurant
})

export const getRestaurants = () => dispatch =>(
    APIUtil.getRestaurants()
    .then((restaurants) => dispatch(receiveRestaurants(restaurants)))
)

export const getRestaurant = restaurant => dispatch =>(
    APIUtil.getRestaurant(restaurant)
    .then((restaurant) => {dispatch(receiveRestaurant(restaurant))})
)

export const createRestaurant = restaurant => dispatch =>(
    APIUtil.getRestaurant(restaurant)
    .then((restaurant) => dispatch(receiveRestaurant(restaurant)))
)


