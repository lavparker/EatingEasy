
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getSearchRestaurants } from '../../actions/search_actions';
import { getRestaurant, getRestaurants } from "../../actions/restaurant_actions";

// import RestaurantsSearch from './restaurants_search_form'; 
import SearchQuery from "./search_form"; 

const mapStateToProps = (state, ownProps) => {
    debugger
    console.log('in the restaurant search container')
    console.log("restaurants:" + state.restaurants);

    return {
      restaurants: Object.values(state.entities.restaurants),
    };
        //    return {restaurants: Object.values(state.entities.restaurants),}


        
            

}

const mapDispatchToProps = (dispatch) => ({
  getRestaurant: (id) => dispatch(getRestaurant(id)),
  getRestaurants: () => dispatch(getRestaurants()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchQuery)); 
 