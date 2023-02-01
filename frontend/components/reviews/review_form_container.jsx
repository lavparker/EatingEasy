import { connect } from "react-redux";
import createReview from "../../actions/review_actions";
import {getRestaurants, getRestaurant} from "../../actions/restaurant_actions";
import ReviewForm from "./review_form";

const mapStateToProps = (state, ownProps) =>{
    let current_user_id = state.session.id;
    let current_user = state.entities.users[current_user_id];

    let revId = null;

    if (Object.values(state.reviews)[0]) {
      revId = Object.values(state.reviews)[0].id;
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
      reservation: state.entities.reservations[ownProps.reservationId],
      formHeader: "Leave A Review!",
    };


};

const mapDispatchToProps = (dispatch) => ({
  createReview: review => dispatch(createReview(review)),
  getRestaurants: () => dispatch(getRestaurants()),
  getReservation: reservationId => dispatch(getReservation(reservationId)),
  handleSubmit: (reservation) => dispatch(updateReservation(reservation)), // console.log('ive been updated')
  // closeModal: () => dispatch(closeModal()),

  //dispatch appropriate action to update the reservation


})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm); 
