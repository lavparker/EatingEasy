// import { RECEIVE_RESTAURANT_SEARCHES, REMOVE_SEARCHES, RECEIVE_SEARCH_GUESSES } from "../actions/search_actions";

// const searchReducer = (oldState={}, action) => {
//     Object.freeze(oldState);
    


//     switch(action.type){
//         case RECEIVE_RESTAURANT_SEARCHES: 
//             let nextState = Object.assign({}, oldState)
//                 return nextState[action.restaurants]

//         case RECEIVE_SEARCH_GUESSES: 
//             // let nextState = Object.assign({}, oldState);
//             nextState[action.guesses]
//             return nextState;
//         case REMOVE_SEARCHES:
//             return []
//         default: 
//             return oldState; 
//     }
// }

// export default searchReducer; 

import { RECEIVE_SEARCH_RESTAURANTS } from "../actions/search_actions";

const searchsReducer = (oldState = {}, action) => {
    switch(action.type){
        case RECEIVE_SEARCH_RESTAURANTS: 
            return action.restaurants; 
        default: 
            return oldState;  
    }
}; 

export default searchsReducer; 