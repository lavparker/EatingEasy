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
                <h2>Current Reservations</h2>
                <ul>
                    {this.props.reservations.map((reservation) => (
                        <ReservationItem key={reservation.id} reservation={reservation} deleteReservation={this.props.deleteReservation} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default UsersShow;