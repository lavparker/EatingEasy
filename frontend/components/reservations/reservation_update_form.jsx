import React from "react";
import { FaChartLine, FaCheckCircle } from "react-icons/fa";

class ReservationUpdateForm extends React.Component {
  constructor(props) {
    // console.log("RESERVATION UPDATE FORM PROPS", props);
    super(props);

    const tdyDate = new Date();
    let month = tdyDate.getMonth();
    let day = tdyDate.getDate();
    let year = tdyDate.getFullYear();
    let currentDate = `${month}/${day}/${year}`;

  // const [open, setOpen] = useState(false); {open &&()}


    this.state = {
      partySize:
        props.reservation && props.reservation.party_size
          ? props.reservation.party_size
          : "2 people",
      date:
        props.reservation && props.reservation.date
          ? props.reservation.date
          : currentDate,
      time:
        props.reservation && props.reservation.time
          ? props.reservation.time
          : "7:00 PM",
      phoneNumber: this.props.currentUser
        ? this.props.currentUser.phone_number
        : "2002000200",

      firstName: this.props.currentUser
        ? this.props.currentUser.first_name
        : "",
      lastName: this.props.currentUser ? this.props.currentUser.last_name : "",
      email: this.props.currentUser ? this.props.currentUser.email : "",
      specialRequests: "gluten free please",
      restaurantId: this.props.reservation.restaurant_id,
      userId: this.props.reservation.user_id,
      reservationId: this.props.reservation.id,
      reviewSubmitted: false,
      photoUrl: this.props.currentUser ? this.props.currentUser.photoUrl : "",

      // divShowing: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handledivShowing = this.handledivShowing.bind(this); 
    // this.handleCancel = this.handleCancel.bind(this);
  }



  componentWillUnmount() {
    // this.props.removeConfirmation();
  }

  handleInputChange(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    // debugger

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
      id: this.state.reservationId,
      photoUrl: this.state.photoUrl,
      

    };

    // this.props
    //   .handleSubmit(reservation)
    //   .then(() => this.props.closeModal())
    //   .then(() => this.props.toggleUpdateForm())
      

    this.props
      .updateReservation(reservation)
      .then(() => this.props.closeModal())
      .then(() => this.props.toggleUpdateForm())

  // this.props.createReview(review).then(() => {
  //   this.setState({ reviewSubmitted: true });
  // });
    
  }


  

  renderErrors() {
    if(!this.props.errors) return null;
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  

  // handleCancel() {
  //   e.preventDefault();
  //   e.stopPropagation();

  //   this.props
  //     .deleteReservation(this.props.reservation_id)
  //     .then((res) => this.cancelConfirmation(res));
  // }

  // resConfirmation() {
  //   if (!this.props.reservation) return null;

  //   return (
  //     <div>
  //       <h2 className="res-confirmed">
  //         {" "}
  //         <FaCheckCircle className="res-conf-icon" /> &nbsp; Reservation
  //         Confirmed
  //       </h2>
  //     </div>
  //   );
  // }

  // cancelConfirmation() {
  //   if (this.props.reservation === undefined) return null;
  //   return (
  //     <div>
  //       <h2 className="del-confirmed">
  //         {" "}
  //         <FaCheckCircle className="res-conf-icon" /> &nbsp; This reservation
  //         has been cancelled{" "}
  //       </h2>
  //     </div>
  //   );
  // }

  // modifyCancel() {
  //   if (!this.props.reservation_id) return null;

  //   return (
  //     <div className="modify-cancel">
  //       <button className="modify-btn"> Modify </button> |{" "}
  //       <button onClick={this.handleCancel()} className="cancel-btn">
  //         {" "}
  //         Cancel{" "}
  //       </button>
  //     </div>
  //   );
  // }

  render() {
    // const {showing} = this.state;
    // const { toggleUpdateForm } = this.props;
    // console.log("toggleUpdateForm",toggleUpdateForm);
    const successMessage = this.state.reviewSubmitted ? (
      <div>Review Submitted!</div>
    ) : null;

    return (
      <div className="reservation-container">
        <form onSubmit={this.handleSubmit} className="reservation-update-main">
          <div>{this.renderErrors()}</div>

          <div
            // onClick={toggleUpdateForm}
            className="close-res-update"
            // onClick={() => this.setState({ showing: !showing})}
            // onClick={(alert('i was clicked'))}
            // className="close-form"
          >
            x
          </div>
          <h3 className="update-res">{this.props.formHeader}</h3>

          <div>
            <label className="party-size"> Party Size</label>
            <br />
            <select
              defaultValue={"DEFAULT"}
              className="party"
              onChange={this.handleInputChange("partySize")}
            >
              <option value="DEFAULT" disabled>
                2 people
              </option>
              <option value="1 person">1 person</option>
              <option value="2 people">{/* {" "} */}2 people</option>
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
              onChange={this.handleInputChange("date")}
              className="date"
            />
            <label className="res-time">Time</label>
            <br />
            <select
              defaultValue={"DEFAULT"}
              className="times"
              onChange={this.handleInputChange("time")}
            >
              <option value="DEFAULT" disabled>
                7:00 PM
              </option>
              <option value="12:00 AM">12:00 AM</option>
              <option value="12:30 AM">12:30 AM</option>
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

          {/* <Link to={`/users/${user_id}`}>apply to the button below</Link> */}
          {/* <button
            className="res-button"
            onClick={this.handleSubmit} >

            Confirm Reservation
          </button> */}
          {/* {this.renderErrors()} */}

          <br />
          <br />
          {/* <div className="res-confirmation">{this.resConfirmation()}</div> */}

          <br />
          <button className="res-button" onClick={this.handleSubmit}>
            Confirm Reservation
          </button>
          {/* <p>
            {" "}
            <FaChartLine size={25} /> &nbsp; Booked 222 times today{" "}
          </p> */}
          <p>{successMessage}</p>
        </form>
      </div>
    );
  }
}

export default ReservationUpdateForm;
