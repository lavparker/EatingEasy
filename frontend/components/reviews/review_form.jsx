import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import StarRatings from "react-star-ratings";

class ReviewForm extends React.Component {
  constructor(props) {
    console.log("REVIEW FORM PROPS", props);
    super(props);
    this.state = {
      // name: "",
      name: this.props.currentUser.first_name ,
      overall_rating: 0,
      food_rating: 0,
      ambiance_rating: 0,
      value_rating: 0,
      noise_level: 0,
      body: "",
      // restaurant_id: this.props.restaurant.id,
      userId: this.props.currentUser.id,
      reviewSubmitted: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeRating = this.changeRating.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    if (!this.props.restaurant) {
      this.props.getRestaurants();
    }
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger
    const review = {
      
      name: this.props.currentUser.first_name,
      overall_rating: this.state.overall_rating,
      food_rating: this.state.food_rating,
      ambiance_rating: this.state.ambiance_rating,
      value_rating: this.state.value_rating,
      noise_level: this.state.noise_level,
      body: this.state.body,
      user_id: this.state.userId,
      restaurant_id: this.props.match.params.id,
    }

    this.props.createReview(review).then(() => {
      this.setState({ reviewSubmitted: true }); 
    }).then(() => {
      this.props.clearReviewErrors(); 
    }).then(() => {
      setTimeout(() => {
        const restaurantId = this.props.match.params.id;
        this.props.history.push(`/restaurants/${restaurantId}`);
      }, 2000);
      
    });

  }

  // changeStarRating(rating, name) {
  //   this.setState({
  //     [name]: rating,
  //   });
  // }

  changeRating(newRating, name) {
    // debugger
    this.setState({ [name]: newRating });
  }

  renderErrors() {
    // console.log("REVIEW FORM ERRORS", this.props.errors)
    if(!this.props.errors){ 
      return null
    };
    return (
      <ul className="rev-errors">
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>* {error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { restaurant } = this.props;
    if (!this.props.restaurant) return null;

    const successMessage = this.state.reviewSubmitted ? (
      <div>Review Submitted!</div>
    ) : null;

    // console.log("REVIEW FORM NAME", this.props.currentUser.first_name);
    return (
      <div className="review-form">
        <h1>Please review your experience at {restaurant.name}</h1>
        <div className="rev-errors">{this.renderErrors()}</div>
        <br />
        <form onSubmit={this.handleSubmit} className="review-form-main">
          <br />

          <br />
          <p>Overall</p>
          <StarRatings
            rating={this.state.overall_rating}
            numberOfStars={5}
            starRatedColor="#247f9e"
            starEmptyColor="#b8bbbf"
            starHoverColor="#247f9e"
            starDimension="40px"
            starSpacing="1px"
            changeRating={this.changeRating}
            name="overall_rating"
          />
          <br />
          <br />
          <p>Food</p>
          <StarRatings
            rating={this.state.food_rating}
            numberOfStars={5}
            changeRating={this.changeRating}
            starRatedColor="#247f9e"
            starEmptyColor="#b8bbbf"
            starHoverColor="#247f9e"
            starDimension="40px"
            starSpacing="1px"
            name="food_rating"
          />
          <br />
          <br />
          <p>Ambiance</p>
          <StarRatings
            rating={this.state.ambiance_rating}
            numberOfStars={5}
            changeRating={this.changeRating}
            starRatedColor="#247f9e"
            starEmptyColor="#b8bbbf"
            starHoverColor="#247f9e"
            starDimension="40px"
            starSpacing="1px"
            name="ambiance_rating"
          />
          <br />
          <br />
          <p>Noise Level</p>
          <StarRatings
            rating={this.state.noise_level}
            numberOfStars={5}
            changeRating={this.changeRating}
            starRatedColor="#247f9e"
            starEmptyColor="#b8bbbf"
            starHoverColor="#247f9e"
            starDimension="40px"
            starSpacing="1px"
            name="noise_level"
          />
          <br />
          <br />
          <p>Value</p>

          <StarRatings
            rating={this.state.value_rating}
            numberOfStars={5}
            changeRating={this.changeRating}
            starRatedColor="#247f9e"
            starEmptyColor="#b8bbbf"
            starHoverColor="#247f9e"
            starDimension="40px"
            starSpacing="1px"
            name="value_rating"
          />
          <br />
          <br />
          <h2>Please leave a detailed review</h2>
          <br />
          <br />
          <br />
          <div className="rev-body">
            <textarea
              placeholder="Write review here"
              cols="70"
              rows="10"
              onChange={this.handleInput("body")}
            ></textarea>
          </div>
          <br />
          <br />
          <p className="success-message">{successMessage}</p>
          <br />
          <button className="submit-review-btn">
            <FaPencilAlt className="pencil-btn" />
            &nbsp; Submit Review
          </button>
        </form>
      </div>
    );
  }
}

export default ReviewForm;

