import React from "react";
import { FaRegTrashAlt, FaPencilAlt, FaCheckCircle } from "react-icons/fa";
import ReservationUpdateContainer from "../reservations/reservation_update_container";

class ReservationItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      should_show_update_form: false,
    };
  }

  showUpdateForm() {
    let newState = Object.assign({}, { should_show_update_form: true });
    this.setState(newState);
  }

  render() {
    let reservation = this.props.reservation;

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
            <button className="review-res">
              <FaCheckCircle className="review-btn" /> 
               Leave a Review
            </button>
            <button
              className="delete-res"
              onClick={() => this.props.deleteReservation(reservation.id)}
            >
              <FaRegTrashAlt className="trash-can-btn" /> Cancel Reservation{" "}
            </button>
            
            <button
              className="modify-res"
              onClick={() => this.showUpdateForm()}
            >
              {/* {" "} */}
              <FaPencilAlt className="pencil-btn" /> Modify Reservation{" "}
            </button>
          </div>
        </div>
        {/* </div> */}
        <div
          style={{
            zIndex: 9999,
            float: "right",
            height: "300px",
            width: "400px",
          }}
        >
          {this.state.should_show_update_form ? (
            <ReservationUpdateContainer reservationId={reservation.id} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default ReservationItem;
