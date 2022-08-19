import React from 'react';
import {Provider} from 'react-redux'; 
import {
    Route, Redirect, Switch, Link, HashRouter
} from 'react-router-dom'; 
import signupContainer from './session/signup_container';
import NavBarContainer from "./nav_bar/nav_bar_container.jsx";



const App = () =>(
    <div>
        <header>
            <Link to="/" className="header">
                <h1>EasyEats</h1>
            </Link>

            <NavBarContainer/>
        </header>

        <Route path="/signup" component={signupContainer}/>
    </div>
)

export default App;

