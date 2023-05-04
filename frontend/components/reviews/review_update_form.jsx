import React from 'react'; 

class ReviewUpdateForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            overall_rating: this.props.review.overall_rating,
            food_rating: this.props.review.food_rating,
            ambiance_rating: this.props.review.ambiance_rating,
            value_rating: this.props.review.value_rating,
            noise_level: this.props.review.noise_level,
            body: this.props.review.body,
            user_id: this.props.currentUser.id,
            restaurant_id: this.props.restaurant.id,
            id: this.props.review.id,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeRating = this.changeRating.bind(this);

    }

    handleInputChange(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const review = {
            overall_rating: this.state.overall_rating,
            food_rating: this.state.food_rating,
            ambiance_rating: this.state.ambiance_rating,
            value_rating: this.state.value_rating,
            noise_level: this.state.noise_level,
            body: this.state.body,
            user_id: this.state.user_id,
            restaurant_id: this.state.restaurant_id,
            id: this.state.id,
        }

        this.props.updateReview(review);
    }

    changeRating(newRating, name) {
        this.setState({
            [name]: newRating,
        });

    }
    
    render(){

        return(

      <div className="review-update-form">
        <h1>Please review your experience</h1>
        <form onSubmit={this.handleSubmit} className="review-form-main">
          <br />
          {/* <p>Name</p>
          <input
            type="text"
            className="name"
            onChange={this.handleInput("name")}
            value={this.state.name}
          /> */}
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
          <button className="submit-review-btn">
            <FaPencilAlt className="pencil-btn" />
            Submit Updated Review
          </button>
        </form>
      </div>
      );
    }
}

export default ReviewUpdateForm;