import React from 'react';
import {
    Route, Redirect, Switch, Link, HashRouter
} from 'react-router-dom'; 
import Modal from './modal/modal';
import loginFormContainer from './session/login_form_container';
import signupContainer from './session/signup_container';
import NavBarContainer from "./nav_bar/nav_bar_container.jsx";
import {AuthRoute, ProtectedRoute } from "../util/route_utils";
import mainPage from "./main/main";
import RestaurantShow from "./restaurants/restaurant_showPage_container"
// import { } from 'react-icons/fa';



const App = () =>(
    <div className= "main-page">
        
        <Modal/>
        <div>
        <header>
            <Link to="/" className="link-header">
                    <img className="logo" src={'icons8-reservation-64.png'} alt="icon place holder" />
                <h1>EatingEasy</h1>
            </Link>

            <NavBarContainer/>
        </header>
        <Switch>
            <Route exact path="/" component={mainPage} />
            <Route exact path="/restaurants/:id" component={RestaurantShow}/>
            <Redirect to="/" />

        </Switch>
        
        </div>

        <footer>
            <div>
                <a href="https://github.com/lavparker/EatingEasy" target="_blank">github</a>
                <a href="www.linkedin.com/in/laviniaparker" target="_blank">linkedin</a>
                <a href="https://instagram.com/vinia.tech?igshid=YmMyMTA2M2Y=" target="_blank">instagram</a>
            </div>
        </footer>
    </div>
);

export default App;

