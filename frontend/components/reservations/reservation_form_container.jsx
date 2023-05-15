import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router';
import {
  getReservation,
  createReservation,
  removeConfirmation,
  deleteReservation,
  clearReservationErrors,
} from "../../actions/reservation_actions";
import { getRestaurant } from '../../actions/restaurant_actions';
import ReservationForm from './reservation_form';

const mapStateToProps = (state, ownProps) =>{
    //mapStateToProps, takes state and makes those parts available as props in the form 
    // debugger
    let current_user_id = state.session?.id
    // let current_user = state.entities.users[current_user_id]

    let current_user = current_user_id ? state.entities.users[current_user_id] : null;


    let resId = null 

    if (Object.values(state.reservations)[0]){
        resId = Object.values(state.reservations)[0].id
    }

    return({
        currentUser: current_user ? {
            id: current_user.id,
            phone_number: "2002000200",
            first_name: current_user.first_name,
            last_name: current_user.last_name,
            email: current_user.email
        }: null,
        
        restaurant_id: ownProps.restaurant.id,
        reservation_id: state.entities.reservations.id,
        // resConfirmed: state.ui.reservation.confirmation,
        errors: state.errors.reservations,
        formType: "New Reservation"

    })

}

const mapDispatchToProps = dispatch =>({

    getReservation: reservationId => dispatch(getReservation(reservationId)),
    createReservation: reservation => dispatch(createReservation(reservation)),
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId)),
    removeConfirmation: () => dispatch(removeConfirmation()),
    clearReservationErrors: () => dispatch(clearReservationErrors()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReservationForm));

