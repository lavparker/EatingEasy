import React from "react";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import StarRatings from "react-star-ratings";


class RestaurantIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  // randomrating(min, max){
  //   return Math.floor(Math.random() *
  // }

  randStars(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  render() {
    const { restaurant } = this.props;
    let stars = this.randStars(1, 6);
    const num = this.getRandomInt(2, 1000);

    // debugger
    return (
      <div className="restaurant-index-item">
        <Link to={`/restaurants/${restaurant.id}`}>
          <li>
            <div className="res-item-body">
              <div className="res-photo-row-1">
                {/* <img className="show-page-res-img" src={this.props.restaurant.photoUrl} alt="restaurant image" /> */}
                <img
                  className="res-index-img"
                  src={restaurant.photoUrl}
                  alt="restaurant image"
                />
              </div>
              <div className="res-name-row-2">{restaurant.name}</div>
              <div>
                <div className="res-index-stars">
                  <StarRatings
                    rating={stars}
                    numberOfStars={5}
                    changeRating={this.changeRating}
                    starRatedColor="#247f9e"
                    starEmptyColor="#b8bbbf"
                    starHoverColor="#247f9e"
                    starDimension="16px"
                    starSpacing="0.5px"
                    name="overall"
                  />
                </div>
              </div>
              <div className="res-address-row-3">{restaurant.address}</div>
              <br />
              <p className="num-res">
                {" "}
                <FaChartLine size={25} className="chart-line" /> &nbsp; Booked{" "}
                {num} times today{" "}
              </p>

              <button className="reserve-btn">Make a Reservation</button>
            </div>
          </li>
        </Link>
      </div>
    );
  }
}

export default RestaurantIndexItem;
