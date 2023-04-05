import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import StarRatings from "react-star-ratings";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
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
    this.changeRating = this.changeRating.bind(this);
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
    const review = {
      name: this.state.name,
      overallRating: this.state.overall_rating,
      foodRating: this.state.food_rating,
      ambianceRating: this.state.ambiance_rating,
      valueRating: this.state.value_rating,
      noiseLevel: this.state.noise_level,
      body: this.state.body,
      userId: this.state.userId,
      restaurantId: this.state.restaurantId,
    };

    this.props.createReview(review);
    // .then((review) =>{

    // })

    // this.props.handleSubmit(review);
  }

  // changeStarRating(rating, name) {
  //   this.setState({
  //     [name]: rating,
  //   });
  // }

  changeRating(newRating, name) {
    this.setState({ [name]: newRating });
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, idx) => (
  //         <li key={`error-${idx}`}>{error}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    if (!this.props.restaurant) return null;

    return (
      <div className="review-form">
        <h1>Please review your experience</h1>
        <form onSubmit={this.handleSubmit} className="review-form-main">
          <br />
          <p>Name</p>
          <input
            type="text"
            className="name"
            onChange={this.handleInput("name")}
            value={this.state.name}
          />
          <br />
          <p>Overall</p>
          <StarRatings
            rating={this.state.overall_rating}
            numberOfStars={5}
            changeRating={this.changeRating}
            starRatedColor="#247f9e"
            starEmptyColor="#b8bbbf"
            starHoverColor="#247f9e"
            starDimension="40px"
            starSpacing="1px"
            name="overall"
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
            name="food"
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
            name="ambiance"
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
            name="noise-level"
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
            name="value"
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

