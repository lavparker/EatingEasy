import React from "react";
import {connect} from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import LoginFormContainer from "../session/login_form_container";
import SignupContainer from "../session/signup_container";

function Modal ({modal, closeModal}){
    if(!modal){
        return null; 
    }

    let component;
    switch (modal) {
        case "login":
            component= <LoginFormContainer/>
        case "signup":
            component= <SignupContainer/>
        default:
            return null;
    } return (
        //boilerplate?
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>

    );
}

const mapStateToProps = state =>({
    modal: state.ui.modal
})

const mapDispatchToProps = dispatch =>({
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);