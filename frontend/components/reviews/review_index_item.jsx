import React from 'react'; 
import { Link } from 'react-router-dom';
import { StarRatings } from 'react-star-ratings'; 
import { FaRegTrashAlt, FaPencilAlt, FaCheckCircle } from "react-icons/fa";


class ReviewIndexItem extends React.Component{
    constructor(props){
        // debugger
        // console.log("REVIEW INDEX ITEM PROPS", props);
        super(props);

        // this.state = {
        //   editingReview: false,
        // };
    }


    

    render(){
        const { reviews } = this.props; 
        const { reservation } = this.props;
        const { currentUser } = this.props;
  

        // let currentUserId = session.id;
      
        // console.log("the current user id is", currentUser.id)
       
        return (
          <div className="review-item-container">
            <div className="review-index-item">
              <ul className="review-details">
                <li className="current-user">
                  Restaurant Id (for my reference): {reviews.restaurant_id}
                </li>
                <li className="review-userId">User Id: {reviews.user_id}</li>
                <li className="review-id">Review Id: {reviews.id}</li>
                {/* <li className="review-date">Dined on: {reservation.date}</li> */}
                <li className="review-overall">Overall: {reviews.over_all}</li>
                <li className="review-food">Food: {reviews.food_rating}</li>
                <li className="review-ambiance">
                  Ambiance: {reviews.ambiance_rating}
                </li>
                <li className="review-noise">Noise: {reviews.noise_level}</li>
                <li className="review-value">Value: {reviews.value_rating}</li>
                <li className="review-body">{reviews.body}</li>
              </ul>
              {reviews.user_id === currentUser.id && (
                <div className="review-res-buttons">
                  <button
                    className="delete-res"
                    onClick={() => this.props.deleteReview(reviews.id)}
                  >
                    <FaRegTrashAlt className="trash-can-btn" /> Delete Review{" "}
                  </button>
                  <Link
                    to={`/restaurants/${reviews.restaurant_id}/edit-review/${reviews.id}`}
                  >
                    <button className="modify-rev">
                      <FaPencilAlt className="pencil-btn" />
                      Modify Review{" "}
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        );
    }
}

export default ReviewIndexItem; 