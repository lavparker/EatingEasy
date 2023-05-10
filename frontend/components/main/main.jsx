import React from "react";
import RestaurantIndexContainer from "../restaurant_index/restaurant_index_container";
import SearchQuery from "../search/restaurants_search_container";


const mainPage = () =>(
    <div className="main">
        <div className="main-header">

            <h1 className="find-your-table">Find your table for any occasion</h1>
          
            <SearchQuery/>
          
        </div>
        {/* <div className="res-index-container">
            <RestaurantIndexContainer/>
            
        </div>        */}
       
    </div>
         
)

export default mainPage;