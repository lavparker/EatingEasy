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
        const { review } = this.props; 

        return (
          <div className="review-item-container">
            {/* <div> this is working {review.overall}</div> */}
            <div> this is working</div>

            <FaRegTrashAlt />
          </div>
        );
    }
}

export default ReviewIndexItem; 