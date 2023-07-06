import React from "react";
import { closeModal } from "../../actions/modal_actions";
import ReservationItem from "./reservation_item";
import { Link } from "react-router-dom";

class UsersShow extends React.Component {
  componentDidMount() {
    this.props.getReservations();
  }

  render() {
    const { user } = this.props;
    if (!this.props.reservations) {
      return <h1>Loading!</h1>;
    }

    const { reservations } = this.props;

    const ascReservations = reservations.slice().sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA - dateB;
      
    });

   

    if (
      (this.props.reservations != null ||
        this.props.reservations != undefined) &&
      this.props.reservations.length === 0
    ) {
      return (
        <div className="no-res-opts">
          <h1> No Reservations!</h1>
          <div className="reservations-index">
            <div className="no-res-user-options">
              <ul>
                <li >
                  <button className="past-res">Past Reservations</button>
                  &nbsp;
                  <button className="fave-res">Favorite Restaurants</button>
                  &nbsp;
                  <Link to="/">
                    <button className="make-res">
                      Make a Reservation
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="reservations-index">
        <div className="user-options">
          <ul>
            <li>
              <Link to={`/users/${user.id}/past-reservations`}>
                <button className="past-res">Past Reservations</button>
              </Link>
              &nbsp;
              {/* <button className="fave-res">Favorite Restaurants</button> */}
              &nbsp;
              <Link to="/">
                <button className="make-res">Make a Reservation</button>
              </Link>
            </li>
          </ul>
        </div>
    
        <ul className="reservation-items">
          <h2 className="current-reservations">Your Upcoming Reservations</h2>

          {ascReservations.map((reservation) => (
            <ReservationItem
              key={reservation.id}
              reservation={reservation}
              deleteReservation={this.props.deleteReservation}
              // restaurant={this.props.restaurant}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersShow;
