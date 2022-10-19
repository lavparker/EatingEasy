import { combineReducers } from "redux";
import restaurantsReducer from "./restaurants_reducer";
import reservationsReducer from "./reservations_reducer";
import usersReducer from "./users_reducer";
import searchReducer from "./search_reducer"; 


const entitiesReducer = combineReducers({
    users: usersReducer,
    restaurants: restaurantsReducer,
    reservations: reservationsReducer,
    searches: searchReducer
});

export default entitiesReducer;