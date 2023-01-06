import React from "react";

class ReservationUpdate extends React.Component{
    constructor(props){
        super(props);

        const tdyDate = new Date();
        let month = tdyDate.getMonth;
        let day = tdyDate.getDate();
        let year = tdyDate.getFullYear;
        let currentDate = `${month} / ${day} / ${year}`;

    }

    componentDidMount() {
        this.props.getReservation(this.props.match.params.reservationId)
    }

    render(){
        if(this.props.reservation){
            
        }
    }


}

export default ReservationUpdate; 