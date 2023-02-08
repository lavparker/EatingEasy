import React from "react";
import { FaPencilAlt } from "react-icons/fa"

class ReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          name: "",
          overall_rating: 0,
          food_rating: 0,
          ambiance_rating: 0,
          value_rating: 0,
          noise_level: 0,
          body: "",
          restaurantId: this.props.restaurant.restaurant_id,
          userId: this.props.currentUser.id,

        };

        this.handleSubmit = this.handleSubmit.bind(this);


    }

    componentDidMount(){
        if(!this.props.restaurant){
            this.props.getRestaurants()
        }
    }

    handleInput(field){
        return(e) =>{
            this.setState({ [field]: e.currentTarget.value});
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const review = {
            name: this.state.name,
            overallRating: this.state.overall_rating,
            foodRating: this.state.food_rating,
            ambianceRating: this.state.ambiance_rating,
            valueRating: this.state.value_rating,
            noiseLevel: this.state.noise_level,
            body: this.state.body,
            userId: this.state.userId,
            restaurantId: this.state.restaurantId
        }

        this.props.createReview(review)
        // .then((review) =>{

        // })

        this.props.handleSubmit(review);
    }

    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error, idx) =>(
                    <li key={`error-${idx}`}>{error}</li>
                ))}
            </ul>
        );
    }

    

    render(){
        if(!this.props.restaurant) return null; 

        return (
          <div className="review-form">
            <form onSubmit={this.handleSubmit} className="review-form-main">
              <h1>Please review your experience</h1>
              <br />
              <label className="rev-overall">Overall</label>
              <br />
              <br />
              <label className="rev-food">Food</label>
              <br />
              <br />
              <label className="rev-ambiance">Ambiance</label>
              <br />
              <br />
              <label className="rev-noise">Noise Level</label>
              <br />
              <br />
              <label className="rev-value">Value</label>
              <br />
              <br />
              <h2>Please leave a detailed review</h2>
              <br />
              <br />
              <br />
              <div className="rev-body">
                <textarea
                  cols="70"
                  rows="10"
                  onChange={this.handleInput()}
                ></textarea>
              </div>
              <br />
              <br />
              <button className="submit-review-btn">
                <FaPencilAlt className="pencil-btn" />
                Submit Review
              </button>
            </form>
          </div>
        );
    }


}

export default ReviewForm;

