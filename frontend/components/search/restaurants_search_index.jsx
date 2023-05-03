// import React from "react";
// import { useState } from "react";
// import { getRestaurants } from "../../actions/restaurant_actions";
// import { useSelector, useDispatch } from "react-redux";
// import { useReducer } from "react";
// import RestaurantSearchIndexItem from "./restaurants_index_item";

// function RestaurantSearchIndex() {
//   const [query, setQuery] = useState("");
//   const restaurants = useSelector((state) =>
//     Object.values(state.entities.restaurants)
//   );

//   // console.log(restaurants.filter(restaurant => restaurant.name.toLowerCase().includes('ea') ))

//   return (
//     <div className="search-bar-div">
//       <ul className="list">
//         {restaurants
//           .filter((restaurant) =>
//             restaurant.name.toLowerCase().includes(query.toLowerCase())
//           )
//           .map((restaurant) => <RestaurantSearchIndexItem key={restaurant.id} restaruant={restaurant} />)}
//       </ul>
//     </div>
//   );
// }

// export default RestaurantSearchIndex;


