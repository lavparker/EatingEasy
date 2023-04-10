import React from 'react'; 
import { Link } from 'react-router-dom';
import { StarRatings } from 'react-star-ratings'; 

class ReviewIndexItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { review } = this.props; 

        return(
            <div className='review-item-container'>
                <div> this is working {review.overall}</div>
            </div>
        );
    }
}

export default ReviewIndexItem; 