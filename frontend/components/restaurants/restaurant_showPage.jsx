import React from "react";
import {
  FaHeart,
  FaHome,
  FaPhone,
  FaTag,
  FaClock,
  FaTshirt,
  FaLaptop,
  FaBell,
  FaApple,
  FaRegStar,
} from "react-icons/fa";
import ReservationFormContainer from "../reservations/reservation_form_container";
import { HashLink as Link } from "react-router-hash-link";
import StarRatings from "react-star-ratings";
import ReviewIndex from "../reviews/review_index";


class RestaurantShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      phone_number: "",
      cuisine: "",
      details: "",
      additional_features: "",
      hours: "",
      dress_code: "",
      website: "",
      dining_style: "",
    };
  }

  componentDidMount() {
    this.props.getRestaurant(this.props.match.params.id);
    window.scrollTo(0, 0);
  }

  randStars(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  render() {
    if (!this.props.restaurant) {
      return <h1>Loading!</h1>;
    }

    let stars = this.randStars(1, 6);
    return (
      <div className="restaurant-show-page">
        <div className="res-show-head">
          <img
            className="show-page-res-img"
            src={this.props.restaurant.photoUrl}
            alt="restaurant image"
          />
          <button className="show-page-fave-btn">
            <FaHeart /> favorite this restaurant{" "}
          </button>
        </div>

        <div className="show-page-gen-res">
          <div className="show-page-res-info-bar">
            <ul>
              <li>
                <button id="overview" className="res-overview-btn">
                  Overview{" "}
                </button>
                {/* <p className="line-break">|</p> */}
                <a href="#to-reviews">
                  <button className="res-reviews-btn">Reviews</button>
                </a>
              </li>
              {/* <li>
                                <button className="res-reviews-btn">Reviews</button>
                            </li> */}
            </ul>
            {/* <p>Overview reviews</p> */}
          </div>

          <div className="show-page-res-info">
            <header className="show-page-res-name">
              {this.props.restaurant.name}
            </header>
            <h1 className="res-over">Overview</h1>
            <ul className="res-info">
              <li className="res-stars">
                <StarRatings
                  rating={stars}
                  numberOfStars={5}
                  changeRating={this.changeRating}
                  starRatedColor="#247f9e"
                  starEmptyColor="#b8bbbf"
                  starHoverColor="#247f9e"
                  starDimension="40px"
                  starSpacing="1px"
                  name="overall"
                />
              </li>
              <li className="res-cuisine">
                <FaApple /> &nbsp; {this.props.restaurant.cuisine}
              </li>
            </ul>
            <li className="res-details">{this.props.restaurant.details}</li>
            <li className="res-address">
              <div className="res-add-icon">
                <FaHome /> &nbsp; Address:
              </div>
              <div className="res-add-word">
                {this.props.restaurant.address}
              </div>
            </li>

            <br />

            <li className="res-phone">
              <div className="res-phone-icon">
                <FaPhone /> &nbsp; Phone
              </div>
              <div className="res-phone-word">
                {this.props.restaurant.phone_number}
              </div>
            </li>
            <br />

            <li className="res-addfea">
              <div className="res-addfea-icon">
                <FaTag /> &nbsp; Additional Features
              </div>
              <div className="res-addfea-word">
                {this.props.restaurant.additional_features}
              </div>
            </li>
            <br />

            <li className="res-hours">
              <div className="res-hours-icon">
                <FaClock /> &nbsp; Hours
              </div>
              <div className="res-hours-word">
                {this.props.restaurant.hours}
              </div>
            </li>
            <br />

            <li className="res-dress">
              <div className="res-dress-icon">
                <FaTshirt /> &nbsp; Dress Code
              </div>
              <div className="res-dress-word">
                {this.props.restaurant.dress_code}
              </div>
            </li>
            <br />

            <li className="res-web">
              <div className="res-web-icon">
                <FaLaptop /> &nbsp; Website
              </div>
              <div className="res-web-word">
                {/* <button>{this.props.restaurant.website}</button> */}
                <a
                  className="res-web-link"
                  href={this.props.restaurant.website}
                >
                  {this.props.restaurant.website}
                </a>
              </div>
            </li>
            <br />

            <li className="res-dinsty">
              <div className="res-dinsty-icon">
                <FaBell /> &nbsp; Dining Style
              </div>

              <div className="res-dinsty-word">
                {this.props.restaurant.dining_style}
              </div>
            </li>
            <div id="to-reviews">
              <h1 className="res-review">Reviews</h1>
              <ReviewIndex />
            </div>

            {/* <h1 id="reviews-btn" className="res-review">
                  Reviews
                </h1> */}
          </div>
        </div>

        <div className="res-form">
          <ReservationFormContainer restaurant={this.props.restaurant} />
        </div>
      </div>
    );
  }
}

export default RestaurantShow;
