import { connect } from 'react-redux'; 
import UsersShow from './users_show';
import { getReservations, deleteReservation } from '../../actions/reservation_actions';


const mapStateToProps = state => {
    // console.log('logging reservations', state.entities.reservations)
    
    return{
        reservations: Object.values(state.entities.reservations)
        
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        
        getReservations: () => dispatch(getReservations()),
        deleteReservation: reservationId => dispatch(deleteReservation(reservationId))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersShow);

// date
// : 
// "2022-10-31"
// id
// : 
// 277
// party_size
// : 
// 2
// phone_number
// : 
// "2002000200"
// photoUrl
// : 
// "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBTUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9e16137312973dd832b970d02c478a40222ec150/cote-korean.jpg"
// resName
// : 
// "COTE Korean Steakhouse"
// restaurant_id
// : 
// 68
// time
// : 
// "2000-01-01T17:00:00.000Z"
// user_id
// : 
// 3