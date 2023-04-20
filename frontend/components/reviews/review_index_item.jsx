import React from 'react'; 
import { Link } from 'react-router-dom';
import { StarRatings } from 'react-star-ratings'; 
import { FaRegTrashAlt, FaPencilAlt, FaCheckCircle } from "react-icons/fa";


class ReviewIndexItem extends React.Component{
    constructor(props){
        // console.log("REVIEW INDEX ITEM PROPS", props);
        super(props);
    }

    render(){
        const { reviews } = this.props; 
        const { reservation } = this.props;
     
       
        return (
          <div className="review-item-container">
            <div className='review-index-item'>
              <ul className="review-details">
                <li className="current-user">
                  Restaurant Id (for my reference): {reviews.restaurant_id}
                </li>
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
              <button
                className="delete-res"
                onClick={() => this.props.deleteReview(reviews.id)}
              >
                <FaRegTrashAlt className="trash-can-btn" /> Delete Review{" "}
              </button>
              <button className='modify-res'><FaPencilAlt className='pencil-btn'/>Modify Review </button>
            </div>
          </div>
        );
    }
}

export default ReviewIndexItem; 