import { RECEIVE_ALL_RESERVATIONS, RECEIVE_RESERVATION,
 REMOVE_RESERVATION } from "../actions/reservation_actions";

const reservationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ALL_RESERVATIONS:
            return action.reservations;
        case RECEIVE_RESERVATION:
            let nextState = Object.assign({}, oldState);
            nextState[action.reservation.id] = action.reservation;
            return nextState;
        case REMOVE_RESERVATION:
            delete nextState[action.reservationId];
            return nextState;
    
        default:
            return oldState;
    };
};

export default reservationsReducer; 