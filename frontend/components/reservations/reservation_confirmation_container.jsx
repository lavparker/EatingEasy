// import { connect } from 'react-redux';
// import React from 'react';
// import ReservationConfirmation from '.reservation_confirmation'; 

// const mapStateToProps = (state, ownProps) => {
//       let reservation_id = state.entities.reservations.id;
//       let reservation_conf = state.entities.reservations[reservation_id];

//     return({

//         reservation: {
//             id: state.entities.reservations.id,
//             date: reservation_conf.date,
//             time: reservation_conf.time,
//             party_size: reservation_conf.party_size,
        
//         }
//     })
// }

// const mapDispatchToProps = dispatch =>({
//     getReservation: reservationId => dispatch(reservationId),
//     // updateReservation: reservation => dispatch(receiveReservation(reservation)),
//     deleteReservation: reservationId => dispatch(deleteReservation(reservationId)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(ReservationConfirmation); 