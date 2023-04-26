
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getRestaurants } from "../../actions/restaurant_actions";
// import RestaurantsSearch from './restaurants_search_form'; 
import SearchQuery from "./search_form"; 

const mapStateToProps = (state) => {
    // console.log('we are in the search container woohoo')
  return {
    restaurants: Object.values(state.entities.restaurants),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRestaurants: () => dispatch(getRestaurants()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchQuery);

 