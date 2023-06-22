import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS, RECEIVE_USER } from "../actions/session_actions";

const _nullSession = {
    currentUser: null,
};

const sessionReducer = (state = _nullSession, action) =>{
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.user.id };
        case LOGOUT_CURRENT_USER:
           return _nullSession; 
        case RECEIVE_ALL_USERS:
            return action.users;
        case RECEIVE_USER:
            nextState[action.user.id] = action.user;
            return nextState;
    
        default:
            return state;
    }
};

export default sessionReducer; 