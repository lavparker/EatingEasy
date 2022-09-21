import * as APIUtil from "../util/reservation_api_util";

export const RECEIVE_ALL_RESERVATIONS = "RECEIVE_ALL_RESERVATIONS";
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const UPDATE_RESERVATION = "UPDATE_RESERVATION";
export const REMOVE__RESERVATION = "REMOVE_RESERVATION"; 
// export const RECEIVE_ERRORS = "RECEIVE_ERRORS"; 
// export const REMOVE_ERRORS = "REMOVE_ERRORS";

const receiveAllReservations = reservations =>({
    type: RECEIVE_ALL_RESERVATIONS,
    reservations
})

const receiveReservation = reservation =>({
    type: RECEIVE_RESERVATION, 
    reservation 
})

const updateReservation = reservation =>({
    type: UPDATE_RESERVATION,
    reservation 
})

const removeReservation = reservationId =>({
    type: REMOVE__RESERVATION, 
    reservationId
})

export const getReservations = () => dispatch =>(
    APIUtil.getReservations()
    .then(reservations => dispatch(receiveAllReservations(reservations)))
);

export const getReservation =  reservationId => dispatch =>(
    APIUtil.getReservation(reservationId)
    .then(reservation => dispatch(receiveReservation(reservation)))
);

export const createReservation = reservation => dispatch =>(
    APIUtil.createReservation(reservation)
    .then(reservation => dispatch(receiveReservation(reservation)))
);

export const deleteReservation = reservationId => dispatch =>(
    APIUtil.deleteReservation(reservationId)
    .then(() => dispatch(removeReservation(reservationId)))
);

// export const removeErrors = 





// export const getRestaurants = () => dispatch =>(
//     APIUtil.getRestaurants()
//     .then((restaurants) => dispatch(receiveRestaurants(restaurants)))
// )

// export const getRestaurant = id => dispatch =>(
//     APIUtil.getRestaurant(id)
//     .then((restaurant) => dispatch(receiveRestaurant(restaurant)))
// )

// export const createRestaurant = restaurant => dispatch =>(
//     APIUtil.getRestaurant(restaurant)
//     .then((restaurant) => dispatch(receiveRestaurant(restaurant)))
// )

