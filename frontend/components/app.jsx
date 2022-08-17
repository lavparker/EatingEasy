import React from 'react';
import {Provider} from 'react-redux'; 
import {
    Route, Redirect, Switch, Link, HashRouter
} from 'react-router-dom'; 
import signup_container from './session/signup_container';


const App = () =>(
    <div>
        <header>
            <Link to="/" className="header">
                <h1>EasyEats</h1>
            </Link>
        </header>

        <Route path="/signup" component={signup_container}/>
    </div>
)

export default App;