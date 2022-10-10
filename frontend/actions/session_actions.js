import * as APIUtil from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS'; 

//action creators 
const receiveCurrentUser = user =>({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutCurrentUser = () =>({
    type: LOGOUT_CURRENT_USER,

})

const receiveSessionErrors = errors =>({
    type: RECEIVE_SESSION_ERRORS,
    errors
})


//thunk action creators 

export const login = user => dispatch =>{
     return APIUtil.postSession(user)
     .then(user => dispatch(receiveCurrentUser(user)),
        err => (dispatch(receiveSessionErrors(err.responseJSON))))
}

export const logout = () => dispatch =>{
    // debugger
    return APIUtil.deleteSession()
    .then(() => dispatch(logoutCurrentUser()))
}

export const createNewUser = user => dispatch =>{
    return APIUtil.postUser(user)
    .then(user => dispatch(receiveCurrentUser(user)),
        err => (dispatch(receiveSessionErrors(err.responseJSON))))
}

export const clearSessionErrors = () =>{
    return{
        type: CLEAR_SESSION_ERRORS
    }
}