import React from 'react';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import SessionForm from './session_form';
// import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'SignUp'
})
const mapDispatchToProps = dispatch =>({
    processForm: formUser => dispatch(createNewUser(formUser)),

});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

