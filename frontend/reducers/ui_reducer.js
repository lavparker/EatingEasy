import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import searchReducer from "./search_reducer";
import reservationsReducer from "./reservations_reducer"

const uiReducer = combineReducers ({
    modal: modalReducer,
    search: searchReducer,
    reservation: reservationsReducer
});

export default uiReducer; 
