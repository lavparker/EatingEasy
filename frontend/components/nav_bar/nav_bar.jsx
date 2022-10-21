import React from "react";
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faCoffee} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faC} from '@fortawesome/free-solid-svg-icons';
import { FaUser } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';


const NavBar = ({currentUser, login, logout, openModal}) =>{

    const helloWords = ["Hello", "Guten tag", "Salve", "Nǐn hǎo", "Olá", "Marhaban", "Kon'nichiwa", "Anyoung haseyo", "Zdravstvuyte", "Hola", "Namaste", "Privet", "Bonjour", "Assalam u alaikum", "Merhaba", "Ciao", "Sannu", "E nle o", "Habari", "Salom", "Selam", "Kedu", "Kumusta", "Ayubowan", "Kumno", "Hej"];
    let hello = helloWords[Math.floor(Math.random()*helloWords.length)];

    const display = currentUser ? (
        <div className="user-login">
            <p>{hello}, {currentUser.first_name}!</p>

            <div className="dropdown-btn"><FaUser/> <FaAngleDown/>
                {/* <p className="dropdown-btn" ><FaUser/> <FaAngleDown/></p> */}
                <Link to={`/users/${currentUser.id}`}>Profile</Link>

                {/* <Link to=".." relative="path"></Link> */}
                <ul className="user-dropdown">
                    <li>Reservations</li>
                    <li>Favorites</li>
                    <li>Logout</li>
                </ul>

            </div>
            

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
            {/* <Link to="/"> */}
                <button onClick={() => openModal("login")}
                className="signin-btn">Log In</button>
            </Link>

        </div>
    );
    
    return (
        <header className="nav-bar">
            {/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> */}
            {/* <h1 className="logo">EasyEating</h1> */}
            <div>
                { display }
            </div>
        </header>
    );
};

export default NavBar; 

