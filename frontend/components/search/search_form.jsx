import React from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom'; 
import { getRestaurants } from "../../actions/restaurant_actions";
import { useSelector } from "react-redux";
import { useReducer } from "react";
import RestaurantSearchIndex from "./restaurants_search_index";
// import FaSearch from 'react-icons/fa';

function SearchQuery(){
  const [searchTerm, setSearchTerm] = useState(''); 
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); 
  const history = useHistory();
  const restaurants = useSelector((state) =>
      Object.values(state.entities.restaurants)
    ); 

  const handleSearch = (e) =>{
    const term = e.target.value; 

    setSearchTerm(term)
    const filtered = restaurants.filter((restaurant) => 
    restaurant.name.toLowerCase().includes(term.toLowerCase())); 
    setFilteredRestaurants(filtered); 

   
  }

  const handleRestaurantClick = ({restaurantsId}) => {
    history.push(`/restaurants/${restaurantsId}`); 
  }

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
      />
      
      {searchTerm && (
        <>

      {filteredRestaurants.map((restaurant) => (
        <div
          restaurant={restaurant}
          key={restaurants.id}
          onClick={() => handleRestaurantClick(restaurants.id)}
        >
          {restaurant.name}
        </div>
      ))}
      </>
      )}
    </div>
  );
}

export default SearchQuery 