
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getSearchRestaurants } from '../../actions/search_actions';
import RestaurantsSearch from './restaurants_search_form'; 

const mapStateToProps = (state, ownProps) => {
    debugger
    console.log('in the restaurant search container')
    console.log("restaurants:" + state.restaurants);

    return{
        restaurants: state.restaurants
    }
        //    return {restaurants: Object.values(state.entities.restaurants),}


        
            

}

const mapDispatchToProps = dispatch =>({
    getSearchRestaurants: searchTerm => dispatch(getSearchRestaurants(searchTerm))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RestaurantsSearch)); 
 