import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaRegUser, FaCalendarAlt } from 'react-icons/fa'

class ReservationConfirmation extends React.Component{
    constructor(props){
        super(props);
    }


    componentDidMount(){
        this.props.getReservation(this.props.match.params.reservationId)
    }

    render(){
        if(!this.props.reservation) return null; 

        return(
            <div className='res-conf-main'>
                <div className='res-conf-info'>
                    <img className='res-conf-res-photo' src={this.props.reservation.photoUrl} alt="restaurant photo" />
                </div>
                <div className='res-conf-rest-conf-info'>
                    <div className='res-conf-rest-name'>
                        {this.props.reservation.resName}
                    </div>
                    <div className='res-confirmed'> 
                        <FaCheckCircle/> Reservation confirmed
                    </div>

                    <div className='res-conf-party-size'>
                        <FaRegUser/> {this.props.reservation.party_size} people
                    </div>
                    <div className='res-conf-date'>
                        <FaCalendarAlt/>  at {this.props.reservation.time}
                    </div>

                    <div className='res-conf-change' >
                        {/* //  onClick={e => this.props.deleteReservation(this.props.match.params.reservationId) */}
                        {/* //  .then(() => {this.props.history.push(``))}>  */}
                         Modify | Cancel</div>


                </div>
        


            </div>
        )
    }

}

export default ReservationConfirmation; 