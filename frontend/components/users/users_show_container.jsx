import { connect } from "react-redux";
import UsersShow from "./users_show";
import {
  getReservations,
  deleteReservation,
} from "../../actions/reservation_actions";

const mapStateToProps = (state) => {
  // console.log('logging reservations', state.entities.reservations)

  return {
    reservations: Object.values(state.entities.reservations),
    user: state.entities.users[state.session.id],
    user_id: state.session.id,
    restaurants: Object.values(state.entities.restaurants),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReservations: () => dispatch(getReservations()),
    deleteReservation: (reservationId) =>
      dispatch(deleteReservation(reservationId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersShow);
