import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import { getReservation, updateReservation } from '../../actions/reservation_actions';
import { getRestaurants } from '../../actions/restaurant_actions';
import ReservationUpdate from './reservation_update_form'; 


const mapStateToProps = (state, ownProps) => {
    return{

         currentUser: state.session.currentUser,
        // currentUser: state.entities.users[current_user_id],
        reservation: state.entities.reservations[ownProps.match.params.reservationId],
        restaurant: state.entities.restaurants[ownProps.match.params.restaurantId]
    }
}

const mapDispatchToProps = dispatch => ({
    getReservation: reservationId => dispatch(getReservation(reservationId)),
    updateReservation: reservation => dispatch(updateReservation(reservation)),
 
})

export default connect(mapStateToProps, mapDispatchToProps)(ReservationUpdate); 