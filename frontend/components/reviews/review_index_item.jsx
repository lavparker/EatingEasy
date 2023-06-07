import React from 'react'; 
import { Link } from 'react-router-dom';
import { StarRatings } from 'react-star-ratings'; 
import { FaRegTrashAlt, FaPencilAlt, FaCheckCircle } from "react-icons/fa";


class ReviewIndexItem extends React.Component{
    constructor(props){
        // debugger
        // console.log("REVIEW INDEX ITEM PROPS", props);
        super(props); 
    }

    render(){
         const { reviews } = this.props; 
        const { reservation } = this.props;
        const { currentUser } = this.props;
        // console.log("THESE ARE THE REVIEW PROPS", reviews); 
        // console.log("THE USER IS", currentUser)
        if (!reviews) return null;

        // let currentUserId = session.id;
      
        // console.log("the current user id is", currentUser.id)
  
      return (
        <div className="review-item-container">
          <div className="review-details-left">
            <li className="review-firstname">
              <section className="column-1">
                {currentUser.first_name[0]}
              </section>
            </li>
          </div>
          <div className="review-details-right">
            <div className="column-2">
              <div className="review-details-right-top">
                <li className="review-overall">
                  Overall &nbsp; {reviews.overall_rating} &nbsp; |{" "}
                </li>
                <li className="review-food">
                  Food &nbsp; {reviews.food_rating} &nbsp; |{" "}
                </li>
                <li className="review-ambiance">
                  Ambiance &nbsp; {reviews.ambiance_rating} &nbsp; |{" "}
                </li>
                <li className="review-noise">
                  Noise &nbsp; {reviews.noise_level} &nbsp; |{" "}
                </li>
                <li className="review-value">
                  Value &nbsp; {reviews.value_rating}{" "}
                </li>
              </div>
              <div className="review-details-right-mid">
                <li className="review-body">{reviews.body}</li>
              </div>
            </div>
            <div className="review-details-right-bottom">
              {reviews && reviews.user_id === currentUser.id && (
                <div className="review-res-buttons">
                  <button
                    className="delete-rev"
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
        </div>
      );
    }
     
          
              

  
}
  

export default ReviewIndexItem;