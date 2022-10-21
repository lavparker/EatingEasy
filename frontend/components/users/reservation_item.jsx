import React from 'react'; 

class ReservationItem extends React.Component{

    render() {
        let reservation = this. props.reservation

        return (
            <li>
                <span>{reservation.resName}</span>
                <span>Date: {reservation.date}</span>
                <span>Phone Number: {reservation.phone_number}</span>
                <span>Party Size: {reservation.party_size}</span>
                <span onClick={() => this.props.deleteReservation(reservation.id)}>Delete</span>
            </li>
        )
    }
}

export default ReservationItem;