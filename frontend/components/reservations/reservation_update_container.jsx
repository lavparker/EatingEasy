import { connect } from 'react-redux';
import { getReservation, updateReservation } from '../../actions/reservation_actions';
import ReservationForm from "./reservation_form";


const mapStateToProps = (state, ownProps) => {
    return{
        currentUser: state.session.currentUser,
        reservation: state.entities.reservations[ownProps.match.params.reservationId],
        restaurant: state.entities.restaurants[ownProps.match.params.restaurantId]
    }
}

const mapDispatchToProps = dispatch => ({
    getReservation: reservationId => dispatch(getReservation(reservationId)),
    updateReservation: reservation => dispatch(updateReservation(reservation)),
 
})

export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm); 