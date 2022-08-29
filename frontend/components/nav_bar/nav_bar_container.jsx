import React from 'react';
import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { logout } from '../../actions/session_actions.js';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session, entities: { users }}) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

