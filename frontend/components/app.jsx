import React from 'react';
import {
    Route, Redirect, Switch, Link, HashRouter
} from 'react-router-dom'; 
import { AuthRoute, ProtectedRoute } from "../util/route_utils";
import Modal from './modal/modal';
import loginFormContainer from './session/login_form_container';
import signupContainer from './session/signup_container';
import NavBarContainer from "./nav_bar/nav_bar_container.jsx";
import RestaurantIndexContainer from "./restaurant_index/restaurant_index_container";
import mainPage from "./main/main";
import RestaurantShowContainer from "./restaurants/restaurant_showPage_container";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';




const App = () =>(
    <div className= "main-page">
        
        <Modal/>
        <div>
        <header>
            <Link to="/" className="link-header">
                    {/* <img className="logo" src={'icons8-reservation-64.png'} alt="icon place holder" /> */}
                {/* <h1>EatingEasy</h1> */}
            </Link>

            <NavBarContainer/>
        </header>
           
        <Switch>
            <Route exact path="/" component={mainPage} />
            {/* <Route path="/" component={RestaurantIndexContainer} /> */}
            {/* <Route exact path="/restaurants/:id" component={RestaurantShowContainer} /> */}
            
            <Redirect to="/" />

        </Switch>
        
        </div>

        <footer>
            <div>
                {/* <FontAwesomeIcon icon="faHatChef" /> */}
                <a href="https://github.com/lavparker/EatingEasy" target="_blank"><FaGithub/></a>
                <a href="www.linkedin.com/in/laviniaparker" target="_blank"><FaLinkedin/></a>
                <a href="https://instagram.com/vinia.tech?igshid=YmMyMTA2M2Y=" target="_blank"><FaInstagram/></a>
            </div>
        </footer>
    </div>
);

export default App;

