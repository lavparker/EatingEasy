import React from 'react'; 

class ReviewItem extends React.Component{
    // constructor(props){
    //     super()
    // }

    componentDidMount(){
        // debugger
        this.props.getReviews()
    }

    render(){
        let review = this.props.review; 
        const { restaurant } = this.props; 
        let reservation = this.props.reservation;
        

        return (
          <div>
            <div className="review-container">
              <ul className="review-details">
                <li className="current-user">Name: </li>
                <li className="review-date">Dined on: {reservation.date}</li>
                <li className="review-overall">Overall: {review.over_all}</li>
                <li className="review-food">Food: {review.food_rating}</li>
                <li className="review-ambiance">Ambiance: {review.ambiance_rating}</li>
                <li className="review-noise">Noise: {review.noise_level}</li>
                <li className="review-value">Value: {review.value_rating}</li>
                <li className="review-body">{review.body}</li>
              </ul>
            </div>
          </div>
        );
    }
}

export default ReviewItem; 