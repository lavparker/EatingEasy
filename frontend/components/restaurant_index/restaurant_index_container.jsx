import { connect } from 'react-redux'; 
import RestaurantIndex from './restaurant_index';
import { getRestaurants } from '../../actions/restaurant_actions';


const mapStateToProps = state => {
    return{
        restaurants: Object.values(state.entities.restaurants)
        
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        getRestaurants: () => dispatch(getRestaurants())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);