import React from "react";
import { FaRegTrashAlt, FaPencilAlt, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReservationUpdateContainer from "../reservations/reservation_update_container";

class ReservationItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      should_show_update_form: false,
      // should_show_review_form: true,
    };

    this.toggleUpdateForm = this.toggleUpdateForm.bind(this); 
  }

  toggleUpdateForm() {
    let newState = Object.assign({}, { should_show_update_form: !this.state.should_show_update_form});
    this.setState(newState);
  }

  // showReviewForm() {
  //   let newState = Object.assign({}, {should_show_review_form: true});
  //   this.setState(newState);
  // }

  render() {
    let reservation = this.props.reservation;
    const { restaurant } = this.props;
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
            <li className="reservation-time">Time: {reservation.time}</li>
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
                <FaCheckCircle className="review-btn" /> Leave a Review
              </button>
            </Link>

            <button
              className="delete-res"
              onClick={() => this.props.deleteReservation(reservation.id)}
            >
              <FaRegTrashAlt className="trash-can-btn" /> Cancel Reservation{" "}
            </button>

            <button
              className="modify-res"
              onClick={() => this.toggleUpdateForm()}
            >
              {/* {" "} */}
              <FaPencilAlt className="pencil-btn" /> Modify Reservation{" "}
            </button>
          </div>
        </div>
        {/* </div> */}
        <div
          className="toggle-update-form"
          
        >
          {this.state.should_show_update_form ? (
            <ReservationUpdateContainer
              toggleUpdateForm={this.toggleUpdateForm}
              reservationId={reservation.id}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default ReservationItem;
