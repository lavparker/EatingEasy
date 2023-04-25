import { combineReducers } from "redux"
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import entitiesReducer from "./entities_reducer";
import uiReducer from "./ui_reducer";
import restaurantsReducer from "./restaurants_reducer";
import reservationsReducer from "./reservations_reducer";
import reviewsReducer from "./reviews_reducer";
import searchsReducer from "./search_reducer";

const rootReducer = combineReducers({
  
    session: sessionReducer,
    errors: errorsReducer,
    entities: entitiesReducer,
    restaurants: restaurantsReducer,
    reservations: reservationsReducer, 
    reviews:reviewsReducer,
    searches: searchsReducer,
    ui: uiReducer
}); 

export default rootReducer