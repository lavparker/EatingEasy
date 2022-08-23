import { connect } from "react-redux";
import { getRestaurant } from "../../actions/restaurant_actions";
import RestaurantShow from "./restaurant_showPage";

const mapStateToProps = (state, ownProps) => {
    return({
        restaurant: state.entities.restaurants[ownProps.match.params.id]
    })
}

const mapDispatchToProps = dispatch =>{
    return{
        getRestaurant: id => dispatch(getRestaurant(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow)
