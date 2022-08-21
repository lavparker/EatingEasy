import React from 'react';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import SignUp from './signup_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ errors }, ownProps) => {
    
    return{
        errors: errors.session,
        formType: 'SignUp'
    }
        

}
const mapDispatchToProps = dispatch =>({
    processForm: user => dispatch(createNewUser(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal("login"))}> Login</button>
    ),
    // removeErrors: () => dispatch(removeErrors()),
    closeModal: () => dispatch(closeModal())    
    
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

