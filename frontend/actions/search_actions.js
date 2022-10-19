import * as APIUtil from "../util/search_api_util"; 

export const RECEIVE_RESTAURANT_SEARCHES = "RECEIVE_RESTAURANT_SEARCHES"; 
export const RECEIVE_SEARCH_GUESSES = "RECEIVE_SEARCH_GUESSES"; 
export const REMOVE_SEARCHES = "REMOVE_SEARCHES"; 


export const receiveRestaurants = restaurants =>({
    type: RECEIVE_RESTAURANT_SEARCHES, 
    restaurants
})

export const receiveSearchGuesses = guesses =>({
    type: RECEIVE_SEARCH_GUESSES, 
    guesses
})

export const removeSearches = ()=> ({
    type: RECEIVE_SEARCH_GUESSES, 

})

export const searchForRestaurants = resName => dispatch =>(
    APIUtil.searchRestaurants(resName)
    .then((restaurants) => {dispatch(receiveRestaurants(restaurants))
    dispatch(removeSearches())})
)

export const searchGuesses = () => dispatch =>(
    APIUtil.searchGuesses()
    .then((restaurants) =>{
        const guesses = restaurants.map(restaurant =>{
            return restaurant["guess"]; 
        })
        dispatch(receiveSearchGuesses(guesses))
    })
)