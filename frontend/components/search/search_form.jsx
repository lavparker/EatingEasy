import React from 'react'; 
import { useState } from 'react';
import {getRestaurants} from '../../actions/restaurant_actions'; 
import { useSelector, useDispatch } from "react-redux";
import { useReducer } from 'react';



function SearchQuery(){
    const [query, setQuery] = useState("")
    const restaurants = useSelector((state) => Object.values(state.entities.restaurants)); 

    // console.log(restaurants.filter(restaurant => restaurant.name.toLowerCase().includes('ea') ))

    return (
      <div className="search-bar-div">
        <input className="search-bar" placeholder="Search..." type="text" onChange={(e) => setQuery(e.target.value)}/>
        <ul className="list">
            {restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(query.toLowerCase())).map(restaurant => (
                <li key={restaurant.id} className="res-restaruant">{restaurant.name}</li>
            ))}
            {/* {restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(query).map((restaurant) =>(
                <li key={restaurant.id} className='res-restaurant'>{restaurant.name}</li>
            ))}
           */}
        </ul>
      </div>
    );
}

export default SearchQuery;

