import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearSessionErrors } from '../../actions/session_actions';
import LogIn from './login_form';
import { openModal, closeModal } from '../../actions/modal_actions';

//destructuring state and taking out errors 
const mapStateToProps = ({ errors }, ownProps) =>{
    return({
        errors: errors.session,
        formType: "Log In", 
    });
};

const mapDispatchToProps = dispatch => {
    return{
        processForm: user => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal("signup"))}>SignUp</button>
        ),
        clearSessionErrors: () => dispatch(clearSessionErrors()),
        closeModal: () => dispatch(closeModal())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);