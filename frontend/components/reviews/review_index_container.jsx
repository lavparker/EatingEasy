import { connect } from "react-redux";
import ReviewIndex from './review_index'; 
import { getReviews, updateReview, deleteReview } from '../../actions/review_actions'; 
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    // currentUser: state.entities.
    reviews: Object.values(state.entities.reviews).filter(
      (rev) => rev.restaurant_id === ownProps.restaurant.id
    ),
  };
};

const mapDispatchToProps = (dispatch) => ({
  getReviews: () => dispatch(getReviews()),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndex));


