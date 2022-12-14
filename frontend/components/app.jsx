import React from 'react';
import {
    Route, Redirect, Switch, Link, HashRouter
} from 'react-router-dom'; 
import { AuthRoute, ProtectedRoute } from "../util/route_utils";
import loginFormContainer from './session/login_form_container';
import signupContainer from './session/signup_container';
import NavBarContainer from "./nav_bar/nav_bar_container.jsx";
// import RestaurantIndexContainer from "./restaurant_index/restaurant_index_container";
import Modal from './modal/modal';
import mainPage from "./main/main";
import RestaurantShowContainer from "./restaurants/restaurant_showPage_container";
import { FaGithub, FaLinkedin, FaInstagram, FaAngellist } from 'react-icons/fa';
// import ReservationFormContainer from './reservations/reservation_form_container';
import UsersShowContainer from "./users/users_show_container"; 
// import SearchForm from './search/search_form';







const App = () =>(
    <div className= "main-page">
        <Modal />

        <header>

            <NavBarContainer />
    
        </header>
           
        {/* <Switch> */}
            <Route exact path="/" component={mainPage} />

            {/* <Route exact path="/" component={RestaurantIndexContainer} /> */}
            <Route exact path="/users/:id" component={UsersShowContainer}/>
            <Route exact path="/restaurants/:id" component={RestaurantShowContainer} />
            {/* <Route exact path="/users/:id/favorites" component={} /> */}
            {/* <Route exact path="/users/:id/pastReservations" component={}/> */}
            {/* <Route path="/restaurants/query" component={SearchFormContainer}/> */}
            {/* <Route exact path="reservations/delete/> */}
          
        {/* </Switch> */}
        
        {/* </div> */}

        <footer className='footer'>
            <div className="socials">
                {/* <FontAwesomeIcon icon="faHatChef" /> */}
                <a href="https://github.com/lavparker/" className="github" target="_blank"><FaGithub/></a>
                <a href="www.linkedin.com/in/laviniaparker" className="linkedin" target="_blank"><FaLinkedin/></a>
                <a href="https://angel.co/u/la-vinia-parker" className='angellist' target="_blank"><FaAngellist/></a>
                <a href="https://instagram.com/vinia.tech?igshid=YmMyMTA2M2Y=" className="instagram" target="_blank"><FaInstagram/></a>
            </div>
        </footer>
    </div>
);

export default App;

