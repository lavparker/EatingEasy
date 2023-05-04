import React from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom'; 
import { getRestaurants } from "../../actions/restaurant_actions";
import { useSelector } from "react-redux";
import { useReducer } from "react";
import RestaurantSearchIndex from "./restaurants_search_index";
import FaSearch from 'react-icons/fa';

function SearchQuery(){
  const [searchQuery, setSearchQuery] = useState(''); 
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); 
  const history = useHistory();
  const restaurants = useSelector((state) =>
      Object.values(state.entities.restaurants)
    ); 

  const handleSearch = (e) =>{
    const query = e.target.value; 

    setSearchQuery(query)
    const filtered = restaurants.filter((restaurant) => 
    restaurant.name.toLowerCase().includes(query.toLowerCase())); 
    setFilteredRestaurants(filtered); 

   
  }

  const handleRestaurantClick = ({restaurant}) => {
    history.push(`/restaurants/${restaurant.id}`); 
  }

  return (
    <div>
      <input
        className="search-bar-input"
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search..."
      />

      {searchQuery && (
        <>
          {filteredRestaurants.map((restaurant) => (
            <div
              className="restaurant-search-index"
              restaurant={restaurant}
              key={restaurant.id}
            >
              <div
                className="restaurant-search-name"
                onClick={() => handleRestaurantClick({restaurant})}
              >
                {restaurant.name}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default SearchQuery 