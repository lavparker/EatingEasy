import React, { useState } from "react";

// import { Link , useParams} from "react-router-dom";


class ReservationForm extends React.Component{
    constructor(props){
        super(props);
        const tdyDate = new Date();
        let month = tdyDate.getMonth;
        let day = tdyDate.getDate();
        let year = tdyDate.getFullYear;
        let currentDate = `${ month } / ${ day } / ${ year }`;
        

        this.state = {
            // restaurant_id: this.props.restaurantId,
            // user_id: this.props.currentUser.id,
            party_size: "2 people",
            date: currentDate,
            time: "5:00 PM"
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field){
        return (e) => { this.setState({ [field]: e.currentTarget.value })};
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReservation(this.state)
        .then((reservation) =>{
            this.props.history.push(`/reservation/${reservation.id}`)
        })
    }


    render(){
      return(
        <div className="reservation-container">
            <form onSubmit={this.handleSubmit} className="reservation-main">
                <h3> Make a Reservation </h3>

                <div>
                    <label className="party-size"> Party Size</label>
                    <br />
                    <select name="party" id="party-select" onChange={this.handleInput("party_size")}> 
                        
                        <option value="1 person">1 person</option>
                        <option value="2 people" selected> 2 people</option>
                        <option value="3 people">3 people</option>
                        <option value="4 people">4 people</option>
                        <option value="5 people">5 people</option>
                        <option value="6 people">6 people</option>
                        <option value="7 people">7 people</option>
                        <option value="8 people">8 people</option>
                        <option value="9 people">9 people</option>
                        <option value="10 people">10 people</option>
                        <option value="11 people">11 people</option>
                        <option value="12 people">12 people</option>
                        <option value="13 people">13 people</option>
                        <option value="14 people">14 people</option>
                        <option value="15 people">15 people</option>
                        <option value="16 people">16 people</option>
                        <option value="17 people">17 people</option>
                        <option value="18 people">18 people</option>
                        <option value="19 people">19 people</option>
                        <option value="20 people">20 people</option>
                    </select>

                </div>
                <br />
                <div>
                    <label className="res-date">Date</label>
                    <br />
                    <input  type="date" 
                            value={this.state.date}
                            onChange={this.handleInput("date")}
                    />

                    <label className="res-time">Time</label>
                    <br />
                    <select name="times" id="time-select" onChange={this.handleInput("time")}>
                        <option value="12:00 AM">12:00 AM</option>
                        <option value="12:30 AM">12:20 AM</option>
                        <option value="1:00 AM">1:00 AM</option>
                        <option value="1:30 AM">1:30 AM</option>
                        <option value="2:00 AM">2:00 AM</option>
                        <option value="2:30 AM">2:30 AM</option>
                        <option value="3:00 AM">3:00 AM</option>
                        <option value="3:30 AM">3:30 AM</option>
                        <option value="4:00 AM">4:00 AM</option>
                        <option value="4:30 AM">4:30 AM</option>
                        <option value="5:00 AM">5:00 AM</option>
                        <option value="5:30 AM">5:30 AM</option>
                        <option value="6:00 AM">6:00 AM</option>
                        <option value="6:30 AM">6:30 AM</option>
                        <option value="7:00 AM">7:00 AM</option>
                        <option value="7:30 AM">7:30 AM</option>
                        <option value="8:00 AM">8:00 AM</option>
                        <option value="8:30 AM">8:30 AM</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="9:30 AM">9:30 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="10:30 AM">10:30 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="12:30 PM">12:30 PM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="1:30 PM">1:30 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="2:30 PM">2:30 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="3:30 PM">3:30 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="4:30 PM">4:30 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                        <option value="5:30 PM">5:30 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="6:30 PM">6:30 PM</option>
                        <option value="7:00 PM" selected>7:00 PM</option>
                        <option value="7:30 PM">7:30 PM</option>
                        <option value="8:00 PM">8:00 PM</option>
                        <option value="8:30 PM">8:30 PM</option>
                        <option value="9:00 PM">9:00 PM</option>
                        <option value="9:30 PM">9:30 PM</option>
                        <option value="10:00 PM">10:00 PM</option>
                        <option value="10:30 PM">10:30 PM</option>
                        <option value="11:00 PM">11:00 PM</option>
                        <option value="11:30 PM">11:30 PM</option>
                    </select>

                </div>
                <br />
                <br />

                <button className="res-button" onClick={this.handleSubmit}>Confirm Reservation</button>
                <br />
            </form>
        </div>
            
      )
    }
    
    

    // render(){
    //     return(

    //     )
    // }
}

export default ReservationForm; 