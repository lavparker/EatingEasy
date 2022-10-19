import { connect } from 'react-redux';
import React from 'react';
import { withRouter, useParams } from 'react-router-dom';
import { getReservation, createReservation, receiveConfirmation, removeConfirmation, updateReservation, deleteReservation, removeErrors } 
    from '../../actions/reservation_actions';
import { getRestaurant } from '../../actions/restaurant_actions';
import ReservationForm from './reservation_form';

const mapStateToProps = (state, ownProps) =>{
    //mapStateToProps, takes state and makes those parts available as props in the form 
    // debugger
    let current_user_id = state.session.id
    let current_user = state.entities.users[current_user_id]
    // let reservation_id = state.entities.reservations.id; 
    // let reservation_conf = state.entities.reservation[reservation_id]; 
    return({
        //sessionStorage or localStorage ??
        
        // currentUser: state.entities.users.id,
        currentUser: {
            id: current_user.id,
            phone_number: "2002000200",
            first_name: current_user.first_name,
            last_name: current_user.last_name,
            email: current_user.email
        },
        
        // restaurant:state.entities.restaurants[ownProps.match.params.restaurant.id],
        // restaurant: state.entities.restaurants[ownProps.match.params.id],
        restaurant_id: ownProps.restaurant.id,
        reservation_id: state.entities.reservations.id,
        // reservation_conf: state.entities.reservation[reservation_id],
        reservation: {
            date: "",
            time: "",
            party_size: "",
            special_request: ""
        },
        
        resConfirmed: state.ui.reservation.confirmation,
        errors: state.errors.reservation,
        formType: "New Reservation"


    })

    //add aws links to seed file and rerun seed file

}

const mapDispatchToProps = dispatch =>({

    getReservation: reservationId => dispatch(getReservation(reservationId)),
    createReservation: reservation => dispatch(createReservation(reservation)),
    // updateReservation: reservation => dispatch(receiveReservation(reservation)),
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId)), 
    removeConfirmation: () => dispatch(removeConfirmation()),
    removeErrors: () => dispatch(removeErrors()),
    // updateReservation: ,
})

export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);

