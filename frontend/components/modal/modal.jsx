import React from "react";
import {connect} from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import LoginFormContainer from "../session/login_form_container";
import SignupContainer from "../session/signup_container";
import SignUp from "../session/signup_form";

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null; 
    }

    let component;
    switch (modal) {
        case "login":
            component = <LoginFormContainer />;
            break;
        case "signup":
            component= <SignupContainer />;
            break;
        default:
            return null;
    } return (
    
        //add close modal here 
        <div className="background-modal" onClick={closeModal}>
            <div className="modal-next" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
//should i show this popup ovrlay? yes or no? (loging page state)
//if loging in modal is true-create a loging in component (loging modal screen) if
//login modal is true (user has pressed login)
//when they click x, it'll change modal to false 
//if should show modal is true, then load in new log in component, otherwise dont 
//show anything 
    )
}


const mapStateToProps = state =>({
    modal: state.ui.modal
})

const mapDispatchToProps = dispatch =>({
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);