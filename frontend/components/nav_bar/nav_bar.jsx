import React from "react";
import { Link } from 'react-router-dom';


const NavBar = ({currentUser, logout}) =>{
    const display = currentUser ? (
        <div>

            <p>Hello, {currentUser.username}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div>
            <button className="signup-btn">Sign Up</button>
            <button className="signin-btn">Log In</button>

            {/* <Link className ="signup-btn" to="/signup">Sign Up</Link>
            <Link className= "signin-btn" to="/login">Log In</Link> */}
        </div>
    );
    
    return (
        <header className="nav-bar">
            <h1 className="logo">EATINGEASY</h1>
            <div>
                { display }
            </div>
        </header>
    );
};

export default NavBar; 