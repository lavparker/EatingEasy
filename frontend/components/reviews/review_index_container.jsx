import { connect } from "react-redux";
import ReviewIndex from './review_index'; 
import { getReviews, updateReview, deleteReview } from '../../actions/review_actions'; 
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  // debugger
  ({
    currentUser: state.entities.users[state.session.id],
    reviews: state.entities.reviews,
    restaurants: state.entities.restaurants[ownProps.match.params.id],

  })
};

const mapDispatchToProps = (dispatch) => ({
  getReviews: () => dispatch(getReviews()),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  updateReview: (review) => dispatch(updateReview(review))

});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndex));


