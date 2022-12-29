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
            return <h1>No reservations!</h1>
        }

        return (
            <div className='reservations-index'>
                <h2 className='current-reservations'>Current Reservations</h2>
                <ul>
                    {this.props.reservations.map((reservation) => (
                        <ReservationItem key={reservation.id} reservation={reservation} deleteReservation={this.props.deleteReservation} />
                    ))}
                </ul>

                <div>
                    <h2>Past Reservations</h2>
                </div>

                <div>
                    <h2>Favorite Restaurants</h2>
                </div>
            </div>
        )
    }
}

export default UsersShow;