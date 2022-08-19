import React from "react";
import { Link } from 'react-router-dom';



const NavBar = ({currentUser, login, logout, openModal}) =>{
    const display = currentUser ? (
        <div>

            <p>Hello, {currentUser.username}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <nav className="session-buttons"> 
            <Link to="/signup">
                <button onClick={() => openModal("signup")}
                className="signup-btn">Sign Up</button>
            </Link>
            
            <Link to="/login">
                <button onClick={() => openModal("login")}
                className="signin-btn">Log In</button>
            </Link>

        </nav>
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