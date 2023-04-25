
export const getSearchRestaurants = searchTerm => (
    $.ajax({
        method: 'GET',
        url: "api/restaurants",
    })
)