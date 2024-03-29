import React from "react";
import {
  FaRegTrashAlt,
  FaPencilAlt,
  FaCheckCircle,
  FaGlassMartini,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import PastReservationsContainer from "./past_reservations_container";

class PastReservationItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      should_show_update_form: false,
      // should_show_review_form: true,
    };

    this.toggleUpdateForm = this.toggleUpdateForm.bind(this);
    // this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  toggleUpdateForm(e = null) {
    let newState = Object.assign(
      {},
      { should_show_update_form: !this.state.should_show_update_form }
    );

    if (e && e.target && e.target.closest(".reservation-update-main")) {
      newState.should_show_update_form = true;
    }
    if (e && e.target && e.target.closest(".close-res-update")) {
      newState.should_show_update_form = false;
    }

    this.setState(newState);
  }

  render() {
    const { restaurant, reservation } = this.props;
    // let newTime = reservaton.time
    const formattedTime = new Date(reservation.time)
      .toLocaleTimeString(undefined, { hour12: true })
      .replace(/:\d{2}\s/, " ");

    const currentDate = new Date();
    const reservationDate = new Date(reservation.date);

    const isPastReservation = reservationDate > currentDate;

    if (isPastReservation) {
      return null; // Don't render the reservation item if it's in the past
    }

    // console.log("time", formattedTime)

    return (
      <div>
        {/* <div className="reservation-index-container"> */}
        <div className="reservation-boxes">
          <img
            className="reservation-index-img"
            src={reservation.photoUrl}
            alt="restaurant image"
          />
          <ul className="reservation-details">
            <li className="reservation-name">{reservation.resName}</li>
            <li className="reservation-date">Date: {reservation.date}</li>
            <li className="reservation-time">Time: {formattedTime}</li>

            <li className="reservation-phone">
              Phone Number: {reservation.phone_number}
            </li>
            <li className="reservation-party">
              Party Size: {reservation.party_size}
            </li>
          </ul>
          <div className="res-buttons">
            <Link
              to={`/restaurants/${reservation.restaurant_id}/create-review/`}
            >
              <button className="review-res">
                <FaCheckCircle className="review-btn" /> &nbsp; Leave a Review
              </button>
            </Link>
            &nbsp;
            <Link to={`/restaurants/${reservation.restaurant_id}`}>
              <button className="review-res"><FaGlassMartini className="review-btn"/> &nbsp; View Restaurant
              </button>
            </Link>
          </div>
        </div>
        {/* </div> */}
        <div className="toggle-update-form">
          {this.state.should_show_update_form ? (
            <div
              className="modal-background"
              onClick={(e) => this.toggleUpdateForm(e)}
            >
              <ReservationUpdateContainer
                toggleUpdateForm={this.toggleUpdateForm}
                reservationId={reservation.id}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default PastReservationItem;
