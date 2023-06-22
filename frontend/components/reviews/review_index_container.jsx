import { connect } from "react-redux";
import ReviewIndex from './review_index'; 
import { getReviews, getReview, updateReview, deleteReview } from '../../actions/review_actions'; 
import { getUsers, getUser } from '../../actions/session_actions';
import { withRouter } from "react-router-dom";


const mapStateToProps = (state, ownProps) => {
  // debugger
  return({
    currentUser: state.entities.users[state.session.id],
    
    reviews: Object.values(state.entities.reviews),
    // turns reviews into an object array
    restaurants: state.entities.restaurants[ownProps.match.params.id],
    users: Object.values(state.entities.users),

  

  })
};

const mapDispatchToProps = (dispatch) => {
    // console.log("I AM IN THE REVIEW index CONTAINER");

  return{
  getReviews: () => dispatch(getReviews()),
  getReview: (reviewId) => dispatch(getReview(reviewId)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  updateReview: (review) => dispatch(updateReview(review)), 
  getUsers: () => dispatch(getUsers()),
  getUser: (userId) => dispatch(getUser(userId)),

}};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndex));


