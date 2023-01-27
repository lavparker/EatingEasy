import React from 'react';
import ReservationItem from './reservation_item';

class UsersShow extends React.Component{

    componentDidMount(){
        this.props.getReservations(); 
    }

    render(){
        if (!this.props.reservations) {
            return <h1>Loading!</h1>
        }

        if ((this.props.reservations != null || this.props.reservations != undefined) && this.props.reservations.length === 0) {
            return (
              <div className='no-res-opts'>
                <h1> No Reservations!</h1>
                <div className="reservations-index">
                  <div className="no-res-user-options">
                    <ul>
                      <li>
                        <h2 className="past-res">Past Reservations</h2>
                        &nbsp;
                        <h2 className="fave-res">Favorite Restaurants</h2>
                        &nbsp;
                        <h2 className="make-res">Make a Reservation</h2>
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
                  <h2 className="past-res">Past Reservations</h2>
                  &nbsp;
                  <h2 className="fave-res">Favorite Restaurants</h2>
                  &nbsp;
                  <h2 className="make-res">Make a Reservation</h2>
                </li>
              </ul>
            </div>

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
        );
    }
}

export default UsersShow;