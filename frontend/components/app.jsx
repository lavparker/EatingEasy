import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_utils";
import loginFormContainer from "./session/login_form_container";
import signupContainer from "./session/signup_container";
import NavBarContainer from "./nav_bar/nav_bar_container.jsx";
import Modal from "./modal/modal";
import mainPage from "./main/main";
import RestaurantShowContainer from "./restaurants/restaurant_showPage_container";
import { FaGithub, FaLinkedin, FaInstagram, FaAngellist, FaEnvelope } from "react-icons/fa";
import UsersShowContainer from "./users/users_show_container";
import ReviewFormContainer from "./reviews/review_form_container";
import ReviewUpdateFormContainer from "./reviews/review_update_form_container";
// import RestaurantsSearch from "./search/restaurants_search_form";
import RestaurantIndexContainer from "./restaurant_index/restaurant_index_container";



const App = () => (
  <div className="main-page">
    <Modal />

    <header>
      <NavBarContainer />
    </header>

    <Route exact path="/" component={mainPage} />
    <Route exact path="/" component={RestaurantIndexContainer} />


    <Route exact path="/users/:id" component={UsersShowContainer} />
    <Route exact path="/restaurants/:id" component={RestaurantShowContainer} />
    <Route
      exact
      path="/restaurants/:id/create-review/"
      component={ReviewFormContainer}
    />
    <Route
      exact
      path="/restaurants/:id/edit-review/:id"
      component={ReviewUpdateFormContainer}
    />
    <Route />
    {/* <Route exact path="/users/:id/favorites" component={FavoriteRestaurantContainer}/> */}

    {/* <Route exact path="/restaurants/:" */}

    {/* </Switch> */}

    <footer className="footer">
      {/* <div className="outer-socials"> */}
      {/* <div className="socials"> */}
        <p className="connect-footer">Connect with me! </p>

        <img
          src={window.footer}
          alt="picture of La Vinia"
          className="pic-of-me"
        />
        <a
          href="https://github.com/lavparker/"
          className="github"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="www.linkedin.com/in/laviniaparker"
          className="linkedin"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://angel.co/u/la-vinia-parker"
          className="angellist"
          target="_blank"
        >
          <FaAngellist />
        </a>
        <a
          href="https://instagram.com/vinia.tech?igshid=YmMyMTA2M2Y="
          className="instagram"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a href="" className="email" target="">
          <FaEnvelope />
        </a>
      {/* </div> */}
      {/* </div> */}
    </footer>
  </div>
);

export default App;
