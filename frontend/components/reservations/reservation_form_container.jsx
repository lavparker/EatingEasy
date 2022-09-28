import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { getReservation, createReservation, updateReservation, deleteReservation } from '../../actions/reservation_actions';
import ReservationForm from './reservation_form';

const mapStateToProps = (state, ownProps) =>{
    return({
        reservation: state.entities.reservations[ownProps.match.params.id],
        restaurant: entities.restaurants[match.params.id],
        currentUser: state.entities.users[sessionStorage.id], 
        // errors: , 
    })
}

const mapDispatchToProps = dispatch =>({

    getReservation: reservationId => dispatch(getReservation(reservationId)),
    createReservation: reservation => dispatch(createReservation(reservation)), 
    // updateReservation: ,
    // deleteReservation: () => dispatch(deleteReservation(reservationId)), 
})

export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);