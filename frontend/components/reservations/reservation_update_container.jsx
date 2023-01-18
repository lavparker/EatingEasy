import { connect } from 'react-redux';
import { getReservation, updateReservation } from '../../actions/reservation_actions';
import ReservationForm from "./reservation_form";


const mapStateToProps = (state, ownProps) => {
    return{
        // currentUser: state.session.currentUser,
        reservation: state.entities.reservations[ownProps.reservationId],
        // restaurant: state.entities.restaurants[ownProps.match.params.restaurantId]
        formHeader: "Update your reservation"
        
    }
}

const mapDispatchToProps = dispatch => ({
    // getReservation: reservationId => dispatch(getReservation(reservationId)),
    // updateReservation: reservation => dispatch(updateReservation(reservation)),
    handleSubmit: (reservation) => dispatch(updateReservation(reservation))// console.log('ive been updated')
    //dispatch appropriate action to update the reservation 
})

export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm); 