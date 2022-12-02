
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import {  searchForRestaurants, searchGuesses} from '../../actions/search_actions';
import { searchRestaurants, searchGuesses} from '../../actions/restaurant_actions'; 
import SearchForm from "./search_form"; 

const mapStateToProps = (state, ownProps) => ({
            restaurants: Object.values(state.entities.restaurants),
            // guesses: state.entities.searches.guesses

})

const mapDispatchToProps = dispatch =>({
    searchRestaurants: resName => dispatch(searchRestaurants(resName)),
    searchGuesses: () => dispatch(searchGuesses()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchForm)); 
 