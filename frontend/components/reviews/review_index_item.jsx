import React from 'react'; 
import { Link } from 'react-router-dom';
import { StarRatings } from 'react-star-ratings'; 
import { FaRegTrashAlt, FaPencilAlt, FaCheckCircle } from "react-icons/fa";


class ReviewIndexItem extends React.Component{
    constructor(props){
        console.log("REVIEW INDEX ITEM PROPS", props);
        super(props);
    }

    render(){
        const { reviews } = this.props; 
        const { reservation } = this.props;
        return (
          <div className="review-item-container">
            <ul className="review-details">
              <li className="current-user">Name: </li>
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

            <FaRegTrashAlt />
          </div>
        );
    }
}

export default ReviewIndexItem; 