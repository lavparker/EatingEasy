import * as APIUtil from "../util/reservation_api_util";

export const RECEIVE_ALL_RESERVATIONS = "RECEIVE_ALL_RESERVATIONS";
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const UPDATE_RESERVATION = "UPDATE_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION"; 
export const RECEIVE_RESERVATION_ERRORS = "RECEIVE_RESERVATION_ERRORS"; 
export const CLEAR_RESERVATION_ERRORS = "CLEAR_RESERVATION_ERRORS";
export const RECEIVE_CONFIRMATION = "RECEIVE_CONFIRMATION"; 
export const REMOVE_CONFIRMATION = "REMOVE_CONFIRMATION"; 

const receiveAllReservations = reservations =>({
    type: RECEIVE_ALL_RESERVATIONS,
    reservations
})

const receiveReservation = reservation =>({
    type: RECEIVE_RESERVATION, 
    reservation 
})

// const updateReservation = reservation =>({
//     type: UPDATE_RESERVATION,
//     reservation 
// })

const receiveConfirmation = () => ({
    type: RECEIVE_CONFIRMATION
})

const receiveReservationErrors = errors =>({
    type: RECEIVE_RESERVATION_ERRORS,
    errors
})

export const clearReservationErrors = () =>({
    type: CLEAR_RESERVATION_ERRORS

})


const removeReservation = reservationId =>({
    type: REMOVE_RESERVATION, 
    reservationId
})

export const removeConfirmation = () =>({
    type: REMOVE_CONFIRMATION
})


export const getReservations = () => dispatch =>(
    APIUtil.getReservations()
    .then(reservations => dispatch(receiveAllReservations(reservations)))
);

export const getReservation =  reservationId => dispatch =>(
    APIUtil.getReservation(reservationId)
    .then(reservation => dispatch(receiveReservation(reservation)))
);


export const createReservation = reservation => dispatch =>{
   
    return(
        APIUtil.createReservation(reservation)
        .then(reservation => {
            // dispatch(receiveConfirmation());
            dispatch(receiveReservation(reservation)), 
            err => (dispatch(receiveReservationErrors(err.responseJSON)));
        })
    )
}


export const updateReservation = reservation => dispatch =>(
    APIUtil.updateReservation(reservation)
    .then(reservation => dispatch(receiveReservation(reservation)))
);


export const deleteReservation = reservationId => dispatch =>{
    // console.log("I'm deleting a reservation")
    return(
    APIUtil.deleteReservation(reservationId)
    .then((reservationId) => dispatch(removeReservation(reservationId)))
    // here i had reservation.... suggested to change to reservationId 
    )
};

