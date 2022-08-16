import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const ... = (oldState = {}, action) =>{
    Object.freeze(oldState)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, action.)
        case LOGOUT_CURRENT_USER:
            return Object.assign({}, oldState, action.)
            
      
    
        default:
            return oldState

    }
}

export default sessionReducer