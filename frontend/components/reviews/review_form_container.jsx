import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  createReview,
  receiveErrors,
  removeErrors,
} from "../../actions/review_actions";
import ReviewForm from "./review_form";
import { getRestaurants } from "../../actions/restaurant_actions";

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
    restaurant: Object.values(state.entities.restaurants),
    // restaurantId: ownProps.restaurant.id,
    errors: state.errors.reviews,
    formType: "Create a Reservation",
    formHeader: "Leave Us a Review!",
  };
};

const mapDispatchToProps = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)),
  getRestaurants: () => dispatch(getRestaurants()),
  // handleSubmit: (review) => dispatch(createReview(review)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  removeErrors: () => dispatch(removeErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
