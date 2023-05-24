import { connect } from "react-redux";
import UsersShow from "./users_show";
import {
  getReservations,
} from "../../actions/reservation_actions";
import PastReservations from "./past_reservations";


const mapStateToProps = (state) => {
  // console.log('logging reservations', state.entities.reservations)

  return {
    reservations: Object.values(state.entities.reservations),
    user: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReservations: () => dispatch(getReservations()),
  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PastReservations);
