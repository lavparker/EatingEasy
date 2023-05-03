import React from "react";
import RestaurantIndexContainer from "../restaurant_index/restaurant_index_container";
// import SearchForm from "../search/search_form";
// import RestaurantsSearch from '../search/restaurants_search_form'; 
import SearchQuery from "../search/restaurants_search_container";
import RestaurantSearchForm from "../search/restaurant_search_form"; 

const mainPage = () =>(
    <div className="main">
        <div className="main-header">

            <h1 className="find-your-table">Find your table for any occasion</h1>
            {/* <RestaurantsSearch/> */}
            <SearchQuery/>
            {/* <RestaurantSearchForm/> */}
        </div>
        <div className="res-index-container">
            <RestaurantIndexContainer/>
            
        </div>       
       
    </div>
         
)

export default mainPage;