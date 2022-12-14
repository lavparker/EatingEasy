import { RECEIVE_ERRORS, REMOVE_ERRORS  } from "../actions/reservation_actions";

const reservationErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
   
        case RECEIVE_ERRORS:
            return action.errors;
   
        case REMOVE_ERRORS:
            return [];
        
        default:
            return oldState;
    }
}

export default reservationErrorsReducer; 