import { connect } from "react-redux";
import UsersShow from "./users_show";
import {
  getReservations,
} from "../../actions/reservation_actions";
import PastReservations from "./past_reservations";
import { getRestaurants } from "../../actions/restaurant_actions";


const mapStateToProps = (state) => {
  // console.log('logging reservations', state.entities.reservations)

  return {
    reservations: Object.values(state.entities.reservations),
    user: state.entities.users[state.session.id],
    // restaurant: state.entities.restaurants[restaurant_id],
    restaurants: Object.values(state.entities.restaurants),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReservations: () => dispatch(getReservations()),
    getRestaurants: () => dispatch(getRestaurants()),
  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PastReservations);
