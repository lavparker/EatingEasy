// import React from "react";
// import { closeModal } from "../../actions/modal_actions";
// import ReservationItem from "./reservation_item";
// import { Link } from "react-router-dom";

// class UsersShow extends React.Component {
//   componentDidMount() {
//     this.props.getReservations();
//   }

//   render() {
//     if (!this.props.reservations) {
//       return <h1>Loading!</h1>;
//     }

//     if (
//       (this.props.reservations != null ||
//         this.props.reservations != undefined) &&
//       this.props.reservations.length === 0
//     ) {
//       return (
//         <div className="no-res-opts">
//           <h1> No Reservations!</h1>
//           <div className="reservations-index">
//             <div className="no-res-user-options">
//               <ul>
//                 <li>
//                   <h2 className="past-res">Past Reservations</h2>
//                   &nbsp;
//                   <h2 className="fave-res">Favorite Restaurants</h2>
//                   &nbsp;
//                   <Link to="/">
//                     <button>
//                       <h2 className="make-res">Make a Reservation</h2>
//                     </button>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     return (
//       <div className="reservations-index">
//         <div className="user-options">
//           <ul>
//             <li>
//               <h2 className="past-res">Past Reservations</h2>
//               &nbsp;
//               <h2 className="fave-res">Favorite Restaurants</h2>
//               &nbsp;
//               <h2 className="make-res">Make a Reservation</h2>
//             </li>
//           </ul>
//         </div>

//         <ul className="reservation-items">
//           <h2 className="current-reservations">Current Reservations</h2>

//           {this.props.reservations.map((reservation) => (
//             <ReservationItem
//               key={reservation.id}
//               reservation={reservation}
//               deleteReservation={this.props.deleteReservation}
//             />
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default UsersShow;

// import React from "react";
// import ReservationItem from "./reservation_item";
// import { Link } from "react-router-dom";

// class UsersShow extends React.Component {
//   componentDidMount() {
//     this.props.getReservations();
//   }

//   render() {
//     if (!this.props.reservation) {
//       return <h1>Loading!</h1>;
//     }

//     if (
//       (this.props.resevations != null ||
//         this.props.reservations != undefined) &&
//       this.props.reservations.length === 0
//     ) {
//       return (
//         <div className="no-res-opts">
//           <h1>No Reservations!</h1>
//           <div className="reservations-index">
//             <div className="no-res-user-options">
//               <ul>
//                 <li>
//                   <button className="past-res"> Past Reservations</button>
//                   &nbsp;
//                   <button className="fave-res">Favorite Restaurants</button>
//                   &nbsp;
//                   <Link to="/">
//                     <button className="make-res"> Make a Reservation </button>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div className="reservations-index">
//           <div className="user-options">
//             <ul>
//               <li>
//                 <button className="past-res"> Past Reservations</button>
//                 &nbsp;
//                 <button className="fave-res">Favorite Restaurants</button>
//                 &nbsp;
//                 <Link to="/">
//                   <button className="make-res"> Make a Reservation </button>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <ul className="reservation-items">
//             <h2 className="current-reservations">Current Reservations</h2>

//             {this.props.reservations.map((reservation) => (
//               <ReservationItem
//                 key={reservation.id}
//                 reservation={reservation}
//                 deleteReservation={this.props.deleteReservation}
//               />
//             ))}
//           </ul>
//         </div>
//       );
//     }
//   }
// }

// export default UsersShow;