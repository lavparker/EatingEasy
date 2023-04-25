import React from 'react'; 

import RestaurantsSearchIndexItem from './restaurants_index_item';

function RestaurantsIndex({ restaurants }){
    debugger
    
    console.log(' YOU ARE IN RESTAURANT INDEX')
    console.log(restaurants[202])
    console.log('hello again');


    // console.log('AMT OF RESTAURANTS:' + restaurants.all)
    // debugger
    return(
        <ul>
            {restaurants.map(restaurant => <RestaurantsSearchIndexItem key={restaurant.id} restaurant={restaurant}/>)}
        </ul>
    )
}

export default RestaurantsIndex; 