import React from 'react'; 
import { FaRegTrashAlt, FaPencilAlt} from 'react-icons/fa'


class ReservationItem extends React.Component{

    render() {
        let reservation = this. props.reservation

        return (
            <div className='reservation-index-container'>
                <ul className='reservation-boxes'>
                        <img className="reservation-index-img" src={reservation.photoUrl} alt="restaurant image" />
                        <div className='reservation-details'>
                            <li className='reservation-name'>{reservation.resName}</li>
                            <li className='reservation-date'>Date: {reservation.date}</li>
                            <li className='reservation-phone'>Phone Number: {reservation.phone_number}</li>
                            <li className='reservation-party'>Party Size: {reservation.party_size}</li>
                        </div>
                        
                        <button className='delete-res' onClick={() => this.props.deleteReservation(reservation.id)}>< FaRegTrashAlt className='trash-can-btn'/> Cancel Reservation </button>
                        <button className='modify-res'> < FaPencilAlt className='pencil-btn'/> Modify Reservation </button>
                </ul>
                
            </div>
            
        )
    }
}

export default ReservationItem;