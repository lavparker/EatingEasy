import React from 'react'; 
import ReviewIndexItem from './review_index_item'; 

class ReviewIndex extends React.Component{
    constructor(props){
        console.log("REVIEW INDEX PROPS", props);
        super(props); 
        // this.props.getReviews = this.props.getReviews.bind(this)
    }

    componentDidMount(){
        this.props.getReviews(); 
    }

    render(){
      const { restaurants } = this.props;
      // const resReviews = this.props.reviews.filter(resRev =>(
      //   resRev.restaurant_id === restaurants.id
      // ));

      // const { reviews } = this.state;
      // console.log("RESTAURANTS:" , `${restaurants.id}`)
      // console.log('RESREVIEWSHERE:', resReviews, ); 
      // console.log('RESREVIEW', resReviews, 'this is a: ', typeof resReviews)
    

      // console.log('RESVEVIEWARR', resReviewsArr)
      // console.log('ResReviewArr is a :', typeof resReviewsArr)
        return (
          <div className="reviews-index">
            <h2>What people are saying:</h2>
          
            <ul className="res-reviews">
             
              {this.props.reviews.map((review) => (
                review.restaurant_id === restaurants.id ?
                <ReviewIndexItem reviews ={review} key={review.id} updateReview={this.props.updateReview} deleteReview={this.props.deleteReview}/> : null
              ))}
            
            </ul>
          </div>
        );
    }
}

export default ReviewIndex; 