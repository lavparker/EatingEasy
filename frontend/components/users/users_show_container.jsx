// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import { getReservations, getReservation, updateReservation, deleteReservation } from '../../actions/reservation_actions';
// import UsersShow from "./users_show";

// const mapStateToProps = (state, ownProps) => {
//     let reservation_id = state.entities.reservations.id;
//     let reservation_conf = state.entities.reservations[reservation_id];

//     return({
//         currentUser: state.entities.users[state.session.id], 
//         reservation: {
//             id: state.entities.reservations.id, 
//             time: reservation_conf.time, 
//             party_size: reservation_conf.party_size,
//         }

//     })
    
// }

// const mapDispatchToProps = dispatch =>({
//     getReservation: reservationId => dispatch(getReservation(reservationId)), 
//     updateReservation: reservation => dispatch(updateReservation(reservation)),
//     deleteReservation: reservationId => dispatch(deleteReservation(reservationId)),
// })


// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));

