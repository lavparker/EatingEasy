import { RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT, REMOVE_RESTAURANTS} from "../actions/restaurant_actions";

const restaurantsReducer = (oldState = {}, action) => {
    Object.freeze(oldState); 
    // console.log('in restaurants reducer');
    
    switch (action.type) {
        case RECEIVE_RESTAURANTS:
            return action.restaurants
        case RECEIVE_RESTAURANT:
            let nextState = Object.assign({}, oldState);
            nextState[action.restaurant.id] = action.restaurant;
            return nextState;
        case REMOVE_RESTAURANTS: 
            return []; 

        default:
            return oldState;
    }
}

export default restaurantsReducer;