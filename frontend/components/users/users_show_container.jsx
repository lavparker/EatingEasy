import { connect } from 'react-redux'; 
import UsersShow from './users_show';
import { getReservations } from '../../actions/reservation_actions';


const mapStateToProps = state => {
    return{
        reservations: Object.values(state.entities.reservations)
        
    }
}
    console.log(getReservations); 

const mapDispatchToProps = dispatch =>{
    return{
        
        getReservations: () => dispatch(getReservations())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersShow);