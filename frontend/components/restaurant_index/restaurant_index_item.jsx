import React from "react";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";


class RestaurantIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  // randomrating(min, max){
  //   return Math.floor(Math.random() *
  // }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  render() {
    const { restaurant } = this.props;
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
                {/* <p className="res-stars">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                    </p> */}

                {/* <StarRatings
                      rating={2.403}
                      starDimension="40px"
                      starSpacing="15px"
                    /> */}
                {/* <StarRatings
                      rating={this.state.overall_rating}
                      numberOfStars={5}
                      changeRating={this.changeStarRating}
                      starRatedColor="#247f9e"
                      starEmptyColor="#b8bbbf"
                      starHoverColor="#e8e3b5"
                      starDimension="40px"
                      starSpacing="1px"
                      name="overall"
                    /> */}
              </div>
              <div className="res-address-row-3">{restaurant.address}</div>
              <br/>
              <p className="num-res">
                {" "}
                <FaChartLine size={25} className="chart-line"/> &nbsp; Booked {num} times today{" "}
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
