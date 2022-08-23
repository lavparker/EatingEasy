export const getRestaurants = () => {
    return(
        $.ajax({
            url: '/api/restaurants',
            method: 'GET'
        })
    )
}

export const getRestaurant = id =>{
    return(
        $.ajax({
            url: `/api/restaurants/${id}`,
            method: 'GET',

        })
    )
}

export const createRestaurant = restaurant =>{
    return(
        $.ajax({
            url: '/api/restaurants',
            method: 'POST',
            data: { restaurant }
        })
    )
}

