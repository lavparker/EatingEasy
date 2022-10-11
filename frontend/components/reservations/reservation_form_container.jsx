import { connect } from 'react-redux';
import React from 'react';
import { withRouter, useParams } from 'react-router-dom';
import { getReservation, createReservation, updateReservation, deleteReservation, removeErrors } 
    from '../../actions/reservation_actions';
import { getRestaurant } from '../../actions/restaurant_actions';
import ReservationForm from './reservation_form';

const mapStateToProps = (state, ownProps) =>{
    return({
        //sessionStorage or localStorage ??
        currentUser: state.entities.users[sessionStorage.id], 
        // restaurant:state.entities.restaurants[ownProps.match.params.restaurant.id],
        // restaurant: state.entities.restaurants[ownProps.match.params.id],
        restaurant: state.entities.restaurants.id,
        reservation: {
            restaurant_id: ownProps.restaurant_id,
            date: "",
            time: "",
            party_size: "",
            phone_number: "",
            first_name: "",
            last_name: ""
        },
        errors: state.errors.reservaiton,
        formType: "New Reservation"

    })

    

}

const mapDispatchToProps = dispatch =>({

    getReservation: reservationId => dispatch(getReservation(reservationId)),
    createReservation: reservation => dispatch(createReservation(reservation)),
    removeErrors: () => dispatch(removeErrors()),
    // updateReservation: ,
    // deleteReservation: () => dispatch(deleteReservation(reservationId)), 
})

export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);

