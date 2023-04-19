import { connect } from "react-redux";
import { getRestaurant } from "../../actions/restaurant_actions";
import RestaurantShow from "./restaurant_showPage";
import { getReviews, getReview, updateReview, deleteReview } from '../../actions/review_actions'; 

const mapStateToProps = (state, ownProps) => {
    if (!state.restaurants) {
        return {}
    }

    return({
        restaurant: state.restaurants[ownProps.match.params.id]
        
})
}

const mapDispatchToProps = dispatch =>({

        getRestaurant: id => dispatch(getRestaurant(id)), 
       
    
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow)
