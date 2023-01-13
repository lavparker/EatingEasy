import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  getReservation,
  createReservation,
  removeConfirmation,
  deleteReservation,
  removeErrors,
} from "../../actions/reservation_actions";
import ReservationForm from "./reservation_form";

const mapStateToProps = (state, ownProps) => {
  let current_user_id = state.session.id;
  let current_user = state.entities.users[current_user_id];

  let resId = null;

  if (Object.values(state.reservations)[0]) {
    resId = Object.values(state.reservations)[0].id;
  }

  return {
    currentUser: {
      id: current_user.id,
      phone_number: "200-200-0200",
      first_name: current_user.first_name,
      last_name: current_user.last_name,
      email: current_user.email,
    },

    restaurantId: ownProps.restaurant.id,
    reservation_id: state.entities.reservations.id,
    errors: state.errors.reservation,
    formType: "New Reservation",
  };

};

const mapDispatchToProps = (dispatch) => ({
  getReservation: (reservationId) => dispatch(getReservation(reservationId)),
  createReservation: (reservation) => dispatch(createReservation(reservation)),
  deleteReservation: (reservationId) =>
    dispatch(deleteReservation(reservationId)),
  removeConfirmation: () => dispatch(removeConfirmation()),
  removeErrors: () => dispatch(removeErrors()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ReservationForm)
);
