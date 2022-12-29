import React from "react";

class ReservationUpdate extends React.Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.getReservation(this.props.match.params.reservationId)
    }

    render(){


        return(
            <div>

            </div>
        )
    }
}

export default ReservationUpdate; 