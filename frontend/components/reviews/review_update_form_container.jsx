import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  getReview,
  updateReview,
  receiveErrors,
  removeErrors,
} from "../../actions/review_actions";
import ReviewForm from "./review_form";
import ReviewUpdateForm from "./review_update_form";
import { getRestaurants } from "../../actions/restaurant_actions";


const mapStateToProps = (state, ownProps) => {
  // console.log("STATE", state)
  let current_user_id = state.session.id;
  let current_user = state.entities.users[current_user_id];

  let resId = null;

  if (Object.values(state.reservations)[0]) {
    resId = Object.values(state.reservations)[0].id;
  }
  // debugger
  return {
    currentUser: {
      id: current_user.id,
      phone_number: "200-200-0200",
      first_name: current_user.first_name,
      last_name: current_user.last_name,
      email: current_user.email,
    },

    restaurant: state.entities.restaurants[ownProps.match.params.id],
    review: state.entities.reviews[ownProps.match.params.reviewId],

    errors: state.errors.reviews,
    formType: "Edit your Review",
    formHeader: "Leave Us a Review!",
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateReview: (review) => dispatch(updateReview(review)),
  getRestaurants: () => dispatch(getRestaurants()),
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  removeErrors: () => dispatch(removeErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewUpdateForm);
