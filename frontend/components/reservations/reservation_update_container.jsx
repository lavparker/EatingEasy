import { connect } from "react-redux";
import {
  getReservation,
  clearReservationErrors,
  updateReservation,
} from "../../actions/reservation_actions";
import ReservationForm from "./reservation_form";
import ReservationUpdateForm from "./reservation_update_form";
import { getRestaurant } from "../../actions/restaurant_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  
  return {
    currentUser: Object.values(state.entities.users)[0],
    restaurants: Object.values(state.entities.restaurants)[0],
    // restaurant: state.entities.restaurants.id,
    
    //   reservation: state.entities.reservations[ownProps.reservationId],
    reservation: state.reservations[ownProps.reservationId],
    errors: state.errors.reservations,
    // restaurant: state.entities.restaurants[ownProps.match.params.restaurantId]
    formHeader: "Update your reservation",
    toggleUpdateForm: ownProps.toggleUpdateForm
  };
};

const mapDispatchToProps = (dispatch) => {
    // console.log("I AM IN THE RESERVATION UPDATE FORM CONTAINER");
  return{
    getRestaurant: (restaurantId) => dispatch(getRestaurant(restaurantId)),
  
  // getReservation: reservationId => dispatch(getReservation(reservationId)),
  // updateReservation: reservation => dispatch(updateReservation(reservation)),
  // handleSubmit: (reservation) => dispatch(updateReservation(reservation)), // console.log('ive been updated')
  updateReservation: (reservation) => dispatch(updateReservation(reservation)),
  //dispatch appropriate action to update the reservation
  clearReservationErrors: () => dispatch(clearReservationErrors()),
  closeModal: () => dispatch(closeModal()),
  login: () => dispatch(openModal("login")),
}};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationUpdateForm);
