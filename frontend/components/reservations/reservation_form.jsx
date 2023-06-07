import React, { useState } from "react";
import { FaChartLine, FaCheckCircle } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import ReservationConfirmation from "./reservation_confirmation";

class ReservationForm extends React.Component {
  constructor(props) {
    console.log("ERRORS", props.errors);
    console.log("RESERVATION FORM PROPS", props); 

    super(props);

    const tdyDate = new Date();
    let month = tdyDate.getMonth();
    let day = tdyDate.getDate();
    let year = tdyDate.getFullYear();
    let currentDate = `${month} / ${day} / ${year}`;
    // let currentDate = `${year}-${month}-${day}`;
    let currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    this.state = {
      partySize: "2 people",
      date: currentDate,
      time: currentTime,
      phoneNumber: this.props.currentUser
        ? this.props.currentUser.phone_number
        : "",
      firstName: this.props.currentUser
        ? this.props.currentUser.first_name
        : "",
      lastName: this.props.currentUser ? this.props.currentUser.last_name : "",
      email: this.props.currentUser ? this.props.currentUser.email : "",
      specialRequests: "gluten free please",
      restaurantId: this.props.restaurant_id,
      userId: this.props.currentUser ? this.props.currentUser.id : "",
      reservationId: this.props.reservation_id,
      showConfirmation: false,
      showLoginModal: false,

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    // this.handleCancel = this.handleCancel.bind(this);
  }

  // componentWillUnmount() {
  //   this.props.removeConfirmation();
  // }

  componentDidMount() {
    this.props.clearReservationErrors();
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    if (!this.props.currentUser) {
      this.props.login({ modal: "login"});
      return;
    }else {
    const reservation = {
      party_size: this.state.partySize,
      date: this.state.date,
      time: this.state.time,
      phone_number: this.state.phoneNumber,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      special_requests: this.state.specialRequests,
      restaurant_id: this.state.restaurantId,
      user_id: this.state.userId,
      reservation_id: this.state.reservationId,
      showConfirmation: false,
      
    };

    // const restaurant = this.props.restaurant;
       this.props.createReservation(reservation).then(() => {  
         this.setState({ showConfirmation: true });
       }).then(() => {
        this.props.clearReservationErrors();
       });

     }
  }




  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  renderErrors() {
    if(!this.props.errors){
      return null;
    }
    console.log("PROPS", this.props);
    console.log("ERRORS", this.props.errors)
    return (
       
      <ul className="res-errors">
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}> {error} </li>
        ))}
      </ul>
    );
  }

  render() {
    const num = this.getRandomInt(2, 1000);
    const { restaurant } = this.props;
    const { reservation } = this.props;
    // const { showConfirmation } = this.props;
    const { errors } = this.props;

    const successMessage = this.state.showConfirmation ? (
      <div className="reservation-confirmation">Reservation Confirmed!</div>
    ) : null;


    return (
      <div className="reservation-container">
        <form onSubmit={this.handleSubmit} className="reservation-main">
          <h3> Make a Reservation </h3>

          <div>
            <label className="party-size"> Party Size</label>
            <br />
            <select
              defaultValue={"DEFAULT"}
              className="party"
              onChange={this.handleInput("partySize")}
            >
              <option value="DEFAULT" disabled>
                2 people
              </option>
              <option value="1 person">1 person</option>
              <option value="2 people">2 people</option>
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
            <input
              type="date"
              value={this.state.date}
              onChange={this.handleInput("date")}
              className="date"
            />
            <label className="res-time">Time</label>
            <br />
            <select
              defaultValue={"DEFAULT"}
              className="times"
              onChange={this.handleInput("time")}
            >
              <option value="DEFAULT" disabled>
                7:00 PM
              </option>
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
              <option value="7:00 PM">7:00 PM</option>
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

          <button className="res-button" onClick={this.handleSubmit}>
            Confirm Reservation
          </button>
          <br />
          <br />
          {/* {showConfirmation ? (
            <div className="reservation-confirmation">
              Your reservation has been successfully created!
            </div>
          ) : null} */}

          <br />

          <p className="booked-num-times">
            {" "}
            <FaChartLine size={25} /> &nbsp; Booked {num} times today{" "}
          </p>

          <div>{this.renderErrors()}</div>
          <p className="success-message">{successMessage}</p>
        </form>
      </div>
    );
  }
}

export default ReservationForm; 