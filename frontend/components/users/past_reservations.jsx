import React from "react";
import { FaRegTrashAlt, FaPencilAlt, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReservationUpdateContainer from "../reservations/reservation_update_container";
import PastReservationItem from "./past_reservation_item";
// import ReservationItem from "./reservation_item";
// import { FaRegTrashAlt, FaPencilAlt, FaCheckCircle } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import ReservationUpdateContainer from "../reservations/reservation_update_container";

class PastReservations extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.getReservations();
        this.props.getRestaurants();

    }

    render(){
        const { user, restaurant, reservations } = this.props;
        // // const formattedTime = new Date(reservation.time)
        // // .toLocaleTimeString(undefined, { hour12: true })
        // // .replace(/:\d{2}\s/, " ");

        // console.log("RESERVATIONS", reservations);

        // const currentDate = new Date();
        // const reservationDate = new Date(reservation.date);
        // const isPastReservation = reservationDate >= currentDate;

        // if (!isPastReservation) {
        //     return null;
        // }

        return (
          <div className="reservations-index">
            <div className="user-options">
              <ul>
                <li>
                  <Link to={`/users/${user.id}/`}>
                    <button className="past-res">Current Reservatons</button>
                  </Link>
                  &nbsp;
                  <Link to="/">
                    <button className="make-res">Make a Reservation</button>
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div className="reservation-boxes"> */}
            {/* //             <img className="reservation-index-img" src={reservation.photoUrl} alt="restaurant image" /> */}
            <ul className="reservation-items">
              <h2 className="past-reservations">Past Reservations</h2>

              {this.props.reservations.map((reservation) => (
                <PastReservationItem
                  key={reservation.id}
                  reservation={reservation}
                  deleteReservation={this.props.deleteReservation}
                />
              ))}
            </ul>
            {/* </div> */}
          </div>
        );

    }
}

    
export default PastReservations;