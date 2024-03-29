
import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faCoffee} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faC} from '@fortawesome/free-solid-svg-icons';
import { FaUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const NavBar = ({ currentUser, login, logout, openModal }) => {
  const helloWords = [
    "Hello",
    "Guten tag",
    "Oi",
    "Salam",
    "Ni hao",
    "Hei",
    "Aloha",
    "Tere",
    "Szia",
    "Labas",
    "Ahoj",
    "Bok",
    "Zdravo",
    "Aluu",
    "Dydh da",
    "Ciao",
    "Adiu",
    "Bonghjornu",
    "Allegra",
    "Mandi",
    "Iska warran",
    "Sawubona",
    "Molo",
    "Maakye",
    "Senga",
    "Bawo ni",
    "Salve",
    "Nǐn hǎo",
    "Olá",
    "Marhaban",
    "Kon'nichiwa",
    "Anyoung haseyo",
    "Zdravstvuyte",
    "Hola",
    "Namaste",
    "Privet",
    "Bonjour",
    "Assalam u alaikum",
    "Merhaba",
    "Ciao",
    "Sannu",
    "E nle o",
    "Habari",
    "Salom",
    "Selam",
    "Kedu",
    "Kumusta",
    "Ayubowan",
    "Kumno",
    "Hej",
  ];
  let hello = helloWords[Math.floor(Math.random() * helloWords.length)];

  const display = currentUser ? (
    <div className="user-login">
      <p>
        {hello}, {currentUser.first_name}!
      </p>

      <div className="dropdown-menu">
        <button className="dropdown-btn">
          <FaUser /> <FaAngleDown />
        </button>
        <ul className="user-dropdown">
          <Link to={`/users/${currentUser.id}`}>
            <li className="dropdown-res">
              {" "}
              &nbsp; &nbsp; My Reservations &nbsp; &nbsp;{" "}
            </li>
          </Link>
          <li className="dropdown-faves">
            {" "}
            {/* &nbsp; &nbsp; My Favorites &nbsp; &nbsp;  */}
            </li>
        </ul>
      </div>

      {/* add dropdown here...include favorites user profile etc */}
      <Link to="/">
        {" "}
        <button className="logout-btn" onClick={logout}>
          Log Out
        </button>
      </Link>
    </div>
  ) : (
    <div className="session-buttons">
      <button onClick={() => openModal("signup")} className="signup-btn">
        Sign Up
      </button>

      <Link to="/">
        <button onClick={() => openModal("login")} className="signin-btn">
          Log In
        </button>
      </Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <div className="left-side">
        <Link className="main-logo" to="/">
          <img
            src={window.logo}
            alt="eating easy logo"
            id="eatingeasy-logo"
            className="eating-easy-logo"
          />
        </Link>
      </div>
      {/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> */}
      {/* <h1 className="logo">EasyEating</h1> */}
      <div className="center">{display}</div>
    </header>
  );
};

export default NavBar; 

