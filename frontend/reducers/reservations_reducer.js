import { RECEIVE_ALL_RESERVATIONS, RECEIVE_CONFIRMATION, RECEIVE_RESERVATION, REMOVE_CONFIRMATION,
 REMOVE_RESERVATION } from "../actions/reservation_actions";

const _resNotConfirmed = Object.freeze({
    confirmation: false
})

const reservationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_RESERVATIONS:
            return action.reservations;
        case RECEIVE_RESERVATION:
            nextState[action.reservation.id] = action.reservation;
            return nextState;
        case RECEIVE_CONFIRMATION: 
            return {confirmation: true}
        case REMOVE_CONFIRMATION:
            return _resNotConfirmed; 
        case REMOVE_RESERVATION:
            delete nextState[action.reservation.id];
            return nextState;

        
        default:
            return oldState;
    };
};

export default reservationsReducer; 