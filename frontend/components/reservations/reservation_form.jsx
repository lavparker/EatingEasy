import React, { useState } from "react";
import { FaChartLine, FaCheckCircle } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import ReservationConfirmation from "./reservation_confirmation";


// import { Link , useParams} from "react-router-dom";

// function ReservationForm(){
//         const tdyDate = new Date();
//         let month = tdyDate.getMonth;
//         let day = tdyDate.getDate();
//         let year = tdyDate.getFullYear;
//         let currentDate = `${month} / ${day} / ${year}`;

//         // const [state, setState] =  useState ({
//         //     partySize: "2 people",
//         //     date: currentDate,
//         //     time: "5:00 PM",
//         //     phoneNumber: currentUser ? currentUser.phone_number : '',
//         //     firstName: currentUser ? currentUser.first_name : '',
//         //     lastName: currentUser ? currentUser.last_name : '',
//         //     email: currentUser ? currentUser.email : '',
//         //     specialRequests: 'gluten free please',
//         //     restaurantId: restaurant_id,
//         //     userId: currentUser ? currentUser.id : '',
//         // });

//         const [partySize, setPartySize] = useState("2 people");
//         const [date, setDate] = useState(currentDate); 
//         const [time, setTime] = useState("5:00 PM"); 
//         const [phoneNumber, setPhoneNumber] = useState(currentUser ? currentDate.phone_number : ''); 
//         const [ firstName, setFirstName] = useState(currentUser ? currentUser.first_name : '');
//         const [ lastName, setLastName] = useState(currentUser ? currentUser.last_name : '');
//         const [ email, setEmail] = useState(currentUser ? currentUser.email : ''); 
//         const [ specialRequests, setSpecialRequests] = useState('gluten free please'); 
//         const [ restaurantId, setRestaurantId] = useState(restaurant_id); 
//         const [ userId, setUserId] = useState(currentUser ? currentUser.id : '',); 



//    const handleInput = (field) => {
//         return (e) => { useState({ [field]: e.currentTarget.value })};
//     };
    
//     const history = useHistory()

//     const handleSubmit = (e) =>{
//         // debugger
//         e.preventDefault();

//         setState({
//             ...state,
//         reservation: {
//             party_size: partySize,
//             date: date,
//             time: time,
//             phone_number: phoneNumber,
//             first_name: firstName,
//             last_name: lastName,
//             email: email,
//             special_requests: specialRequests,
//             restaurant_id: restaurantId,
//             user_id: userId
//         }

//         //   console.log(history)

//             createReservation(reservation) =>{
//             .then((reservation) =>{
//                 history.push(`/reservations/${reservation.id}`)
//             })
//         }
//             // console.log(history)



//       return(
//         <div className="reservation-container">
//             <form onSubmit={handleSubmit} className="reservation-main">
//                 <h3> Make a Reservation </h3>

//                 <div>
//                     <label className="party-size"> Party Size</label>
//                     <br />
//                     <select className="party" onChange={handleInput("partySize")}> 
                        
//                         <option value="1 person">1 person</option>
//                         <option value="2 people" selected> 2 people</option>
//                         <option value="3 people">3 people</option>
//                         <option value="4 people">4 people</option>
//                         <option value="5 people">5 people</option>
//                         <option value="6 people">6 people</option>
//                         <option value="7 people">7 people</option>
//                         <option value="8 people">8 people</option>
//                         <option value="9 people">9 people</option>
//                         <option value="10 people">10 people</option>
//                         <option value="11 people">11 people</option>
//                         <option value="12 people">12 people</option>
//                         <option value="13 people">13 people</option>
//                         <option value="14 people">14 people</option>
//                         <option value="15 people">15 people</option>
//                         <option value="16 people">16 people</option>
//                         <option value="17 people">17 people</option>
//                         <option value="18 people">18 people</option>
//                         <option value="19 people">19 people</option>
//                         <option value="20 people">20 people</option>
//                     </select>

//                 </div>
//                 <br />
//                 <div>
//                     <label className="res-date">Date</label>
//                     <br />
//                     <input  type="date" 
//                             value={date}
//                             onChange={handleInput("date")}
//                             className="date"
//                     />
//                     <label className="res-time">Time</label>
//                     <br />
//                     <select className="times" onChange={handleInput("time")}>
//                         <option value="12:00 AM">12:00 AM</option>
//                         <option value="12:30 AM">12:20 AM</option>
//                         <option value="1:00 AM">1:00 AM</option>
//                         <option value="1:30 AM">1:30 AM</option>
//                         <option value="2:00 AM">2:00 AM</option>
//                         <option value="2:30 AM">2:30 AM</option>
//                         <option value="3:00 AM">3:00 AM</option>
//                         <option value="3:30 AM">3:30 AM</option>
//                         <option value="4:00 AM">4:00 AM</option>
//                         <option value="4:30 AM">4:30 AM</option>
//                         <option value="5:00 AM">5:00 AM</option>
//                         <option value="5:30 AM">5:30 AM</option>
//                         <option value="6:00 AM">6:00 AM</option>
//                         <option value="6:30 AM">6:30 AM</option>
//                         <option value="7:00 AM">7:00 AM</option>
//                         <option value="7:30 AM">7:30 AM</option>
//                         <option value="8:00 AM">8:00 AM</option>
//                         <option value="8:30 AM">8:30 AM</option>
//                         <option value="9:00 AM">9:00 AM</option>
//                         <option value="9:30 AM">9:30 AM</option>
//                         <option value="10:00 AM">10:00 AM</option>
//                         <option value="10:30 AM">10:30 AM</option>
//                         <option value="11:00 AM">11:00 AM</option>
//                         <option value="11:30 AM">11:30 AM</option>
//                         <option value="12:00 PM">12:00 PM</option>
//                         <option value="12:30 PM">12:30 PM</option>
//                         <option value="1:00 PM">1:00 PM</option>
//                         <option value="1:30 PM">1:30 PM</option>
//                         <option value="2:00 PM">2:00 PM</option>
//                         <option value="2:30 PM">2:30 PM</option>
//                         <option value="3:00 PM">3:00 PM</option>
//                         <option value="3:30 PM">3:30 PM</option>
//                         <option value="4:00 PM">4:00 PM</option>
//                         <option value="4:30 PM">4:30 PM</option>
//                         <option value="5:00 PM">5:00 PM</option>
//                         <option value="5:30 PM">5:30 PM</option>
//                         <option value="6:00 PM">6:00 PM</option>
//                         <option value="6:30 PM">6:30 PM</option>
//                         <option value="7:00 PM" selected>7:00 PM</option>
//                         <option value="7:30 PM">7:30 PM</option>
//                         <option value="8:00 PM">8:00 PM</option>
//                         <option value="8:30 PM">8:30 PM</option>
//                         <option value="9:00 PM">9:00 PM</option>
//                         <option value="9:30 PM">9:30 PM</option>
//                         <option value="10:00 PM">10:00 PM</option>
//                         <option value="10:30 PM">10:30 PM</option>
//                         <option value="11:00 PM">11:00 PM</option>
//                         <option value="11:30 PM">11:30 PM</option>
//                     </select>

//                 </div>
//                 <br />
//                 <br />

//                 <button className="res-button" onClick={handleSubmit}>Confirm Reservation</button>
//                 <br />
//                 <p> <FaChartLine
//                         size={25}
//                         /> &nbsp; Booked 222 times today </p>
//             </form>
            
//         </div>
            
//       )
    
//     export default ReservationForm; 

class ReservationForm extends React.Component{
    constructor(props) {
        super(props);
        
        const tdyDate = new Date();
        let month = tdyDate.getMonth;
        let day = tdyDate.getDate();
        let year = tdyDate.getFullYear;
        let currentDate = `${month} / ${day} / ${year}`;

        // let num = Math.floor(Math.random() * 250);
        this.state = {
            // restaurant_id: restaurant.id,
            // user_id: this.props.currentUser.id,
            partySize: "2 people",
            date: currentDate,
            time: "5:00 PM",
            phoneNumber: this.props.currentUser ? this.props.currentUser.phone_number : '',
            firstName: this.props.currentUser ? this.props.currentUser.first_name : '',
            lastName: this.props.currentUser ? this.props.currentUser.last_name : '',
            email: this.props.currentUser ? this.props.currentUser.email : '',
            specialRequests: 'gluten free please',
            restaurantId: this.props.restaurant_id,
            userId: this.props.currentUser ? this.props.currentUser.id : '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentWillUnmount(){
        this.props.removeConfirmation(); 
    }

    handleInput(field){
        return (e) => { this.setState({ [field]: e.currentTarget.value })};
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();

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
            user_id: this.state.userId
        }; 

        this.props.createReservation(reservation);

        // let history = useHistory();
        // //   console.log(history)

        // this.props.createReservation(reservation)
        // .then(reservation =>{
            
        // this.props.history.push(`/reservations/${reservation}`)
        //     // console.log(history)

        // })


    }

    resConfirmation(){
            if(!this.props.resConfirmed) return null; 
            return(
                <div>
                    <h2 className="res-confirmed"> <FaCheckCircle className="res-conf-icon"/> &nbsp; Reservation Confirmed</h2>
                </div>
            )
    } 

    
    handleCancel(e){
        // e.preventDefault(); 

        const reservation_id = this.props.reservation.id; 

        this.props.deleteReservation(reservation_id)
    }

    cancelConfirmation(){
        if(this.props.resConfirmed) return null; 
        return(
            <div>
                <h2 className="del-confirmed"> <FaCheckCircle className="res-conf-icon"/> &nbsp; This reservation has been cancelled </h2>
            </div>
        )
    }

    modifyCancel(){
        if(!this.props.resConfirmed) return null; 

        return(
            <div className="modify-cancel">
                <button className="modify-btn"> Modify </button> | <button onClick={this.handleCancel()} className="cancel-btn"> Cancel </button>

                {this.cancelConfirmation()}
            </div>
        )
    }

    // handleUpdate()

    

    render(){
      return(
        <div className="reservation-container">
            <form onSubmit={this.handleSubmit} className="reservation-main">
                <h3> Make a Reservation </h3>

                <div>
                    <label className="party-size"> Party Size</label>
                    <br />
                    <select className="party" onChange={this.handleInput("partySize")}> 
                        
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
                            className="date"
                    />
                    <label className="res-time">Time</label>
                    <br />
                    <select className="times" onChange={this.handleInput("time")}>
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
                <br />
                <div className="res-confirmation">
                    {this.resConfirmation()}
                <br />
                    {this.modifyCancel()}
                </div>

                <br />
            

                <p> <FaChartLine
                        size={25}
                        /> &nbsp; Booked 222 times today </p>
                

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