export const searchRestaurants = restaurantName =>{
    return $.ajax({
        url: "api/restaurants", 
        method: 'GET', 
        data: { restaurantName }
    })
}

export const searchGuesses = () =>{
    return $.ajax({
        url: "api/restaurants", 
        method: 'GET', 
    })
}