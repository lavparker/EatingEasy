import React from "react";
import { FaRegTrashAlt, FaPencilAlt, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReservationUpdateContainer from "../reservations/reservation_update_container";
import ReservationItem from "./reservation_item";
// import { FaRegTrashAlt, FaPencilAlt, FaCheckCircle } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import ReservationUpdateContainer from "../reservations/reservation_update_container";

class PastReservations extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.getReservations();

    }

    render(){
        const { user, restaurant, reservations } = this.props;
        // // const formattedTime = new Date(reservation.time)
        // // .toLocaleTimeString(undefined, { hour12: true })
        // // .replace(/:\d{2}\s/, " ");

        // const currentDate = new Date();
        // const reservationDate = new Date(reservation.date);
        // const isPastReservation = reservationDate >= currentDate;

        // if (!isPastReservation) {
        //     return null;
        // }

        return (
          <div>
            <div className="reservation-boxes">
              {/* //             <img className="reservation-index-img" src={reservation.photoUrl} alt="restaurant image" /> */}
              <ul className="reservation-items">
                <h2 className="current-reservations">Current Reservations</h2>

                {this.props.reservations.map((reservation) => (
                  <ReservationItem
                    key={reservation.id}
                    reservation={reservation}
                    deleteReservation={this.props.deleteReservation}
                  />
                ))}
              </ul>
            </div>
          </div>
        );

    }
}

    
export default PastReservations;