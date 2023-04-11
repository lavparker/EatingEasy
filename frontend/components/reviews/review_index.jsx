import React from 'react'; 
import ReviewIndexItem from './review_index_item'; 

class ReviewIndex extends React.Component{
    constructor(props){
        super(props); 
        // this.props.getReviews = this.props.getReviews.bind(this)
    }

    // componentDidMount(){
    //     this.props.getReviews(); 
    // }

    render(){
        return (
          <div className="reviews-index">
            <h2>What people are saying:</h2>

            <ul className="res-reviews">
              {/* {this.props.reviews.map((review) => (
                <ReviewIndexItem reviews ={review} key={review.id} />
              ))} */}
            </ul>
          </div>
        );
    }
}

export default ReviewIndex; 