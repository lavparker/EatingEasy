import React from 'react';
import {
    Route, Redirect, Switch, Link, HashRouter
} from 'react-router-dom'; 
import Modal from './modal/modal';
import loginFormContainer from './session/login_form_container';
import signupContainer from './session/signup_container';
import NavBarContainer from "./nav_bar/nav_bar_container.jsx";
import {AuthRoute, ProtectedRoute } from "../util/route_utils";
import mainPage from "./main/main"



const App = () =>(
    <div className= "main-page">
        <Modal/>
        <header>
            <Link to="/" className="link-header">
                <h1>EasyEats</h1>
            </Link>

            <NavBarContainer/>
        </header>
        <Switch>
            <Route exact path="/" component={mainPage} />
            <Route exact path="/signup" component={signupContainer} />
            <Route exact path="/login" component={loginFormContainer} />
        </Switch>
        
    
    </div>
)

export default App;

