export const searchRestaurants = restaurantName =>{
    return $.ajax({
        url: "api/restaurant/search", 
        method: 'GET', 
        data: { restaurantName }
    })
}

export const searchGuesses = () =>{
    return $.ajax({
        url: "api/restaurants/res_search", 
        method: 'GET', 
    })
}