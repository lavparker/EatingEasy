import React from "react";
import { Link } from 'react-router-dom';



const NavBar = ({currentUser, login, logout, openModal}) =>{
    const display = currentUser ? (
        <div className="user-login">

            <p>Hello, {currentUser.first_name}!</p>
            {/* add dropdown here...include favorites user profile etc */}
            <button className="logout-btn" onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div className="session-buttons"> 
            {/* <Link to="/signup"> */}
                <button onClick={() => openModal("signup")}
                className="signup-btn">Sign Up</button>
            {/* </Link> */}
            
            
            <Link to="/login">
                <button onClick={() => openModal("login")}
                className="signin-btn">Log In</button>
            </Link>

        </div>
    );
    
    return (
        <header className="nav-bar">
            {/* <h1 className="logo">EasyEating</h1> */}
            <div>
                { display }
            </div>
        </header>
    );
};

export default NavBar; 

// .classname p