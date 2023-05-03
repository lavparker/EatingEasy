import React from "react";
import { useState } from "react";
import { getRestaurants } from "../../actions/restaurant_actions";
import { useSelector, useDispatch } from "react-redux";
import { useReducer } from "react";

// function RestaurantSearchIndexItem({restaurant}) {
//   const [query, setQuery] = useState("");
//   const restaurants = useSelector((state) =>
//     Object.values(state.entities.restaurants)
//   );
  // console.log(restaurants.filter(restaurant => restaurant.name.toLowerCase().includes('ea') ))

//   return (

    //   <li className="restaurant-li">
    //     {/* {restaurant.name} */}
    //     null
    //   </li>

//   );
// }

// export default RestaurantSearchIndexItem;

