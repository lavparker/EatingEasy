
import { connect } from 'react-redux';
import { RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT} from "../../actions/search_actions"
import SearchForm from "./search_form"; 

const mapStateToProps = (state, ownProps) => ({
        restaurant: state.ui.search, 
})

const mapDispatchToProps = dispatch =>({

        receiveRestaurant: restaurant => {
            dispatch({type: RECEIVE_RESTAURANT, 
                search: restaurant
            }); 
        }
    
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
