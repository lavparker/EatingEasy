import React from "react";
import { FaHeart, FaHome, FaPhone, FaTag, FaClock, FaTshirt, FaLaptop, FaBell, FaApple } from 'react-icons/fa';
import ReservationForm from "../reservations/reservation_form_container";

class RestaurantShow extends React.Component{
    constructor(props){
        super(props);

        this.state={
            name: "",
            address: "",
            phone_number: "",
            cuisine: "",
            details: "",
            additional_features: "",
            hours: "",
            dress_code: "",
            website: "",
            dining_style: ""
        };
    }

    componentDidMount(){
        this.props.getRestaurant(this.props.match.params.id)
    }

    render(){
        if (!this.props.restaurant) {
            return <h1>Loading!</h1>
        }
        return(
            <div className="restaurant-show-page">

                <div className="res-show-head">
                    <img className="show-page-res-img" src={this.props.restaurant.photoUrl} alt="restaurant image" />
                    <button className="show-page-fave-btn"><FaHeart/>  favorite button placeholder</button>
            
                </div>        
            
                <div className="show-page-gen-res">
                    <div className="show-page-res-info-bar">
                        <ul>
                            <li>
                                <button className="res-overview-btn">Overview</button>
                                <button className="res-reviews-btn">Reviews</button>

                            </li>
                            {/* <li>
                                <button className="res-reviews-btn">Reviews</button>
                            </li> */}

                        </ul>
                    {/* <p>Overview reviews</p> */}
                    </div>

                    < div className="show-page-res-info">
                        
                        <header className="show-page-res-name">{this.props.restaurant.name}</header>
                        <h1 className="res-over">Overview</h1>
                        <ul className="res-info">
                            <li>star reating</li>
                            <li className="res-cuisine"><FaApple/> {this.props.restaurant.cuisine}</li>

                        </ul>
                        <li className="res-details">{this.props.restaurant.details}</li>
                        <li className="res-address"> 
                        
                        <div className="res-add-icon">
                            <FaHome/>Address  
                        </div>
                        <div className="res-add-word">
                            {this.props.restaurant.address}
                        </div>
                        </li>

                        <br />

                        <li className="res-phone"> 
                            <div className="res-phone-icon">
                                <FaPhone/>Phone
                            </div>
                            <div className="res-phone-word">
                             {this.props.restaurant.phone_number}
                            </div>
                        </li>
                        <br />

                        <li className="res-addfea">
                            <div className="res-addfea-icon">
                             <FaTag/>Additional Features
                            </div>
                            <div className="res-addfea-word">
                              {this.props.restaurant.additional_features}
                            </div>
                        </li>
                        <br />

                        <li className="res-hours">
                            <div className="res-hours-icon">
                             <FaClock/> Hours
                            </div>
                            <div className="res-hours-word">
                              {this.props.restaurant.hours}
                            </div>
                        </li>
                        <br />

                        <li className="res-dress">
                            <div className="res-dress-icon">
                             <FaTshirt/> Dress Code
                            </div>
                            <div className="res-dress-word">
                              {this.props.restaurant.dress_code}
                            </div>
                        </li>
                        <br />

                        <li className="res-web">
                            <div className="res-web-icon">
                             <FaLaptop/>Website
                            </div>
                            <div className="res-web-word">
                              {this.props.restaurant.website}
                            </div>  
                        </li>
                        <br />

                        <li className="res-dinsty">
                            <div className="res-dinsty-icon">
                             <FaBell/> Dining Style

                            </div>

                            <div className="res-dinsty-word">
                            {this.props.restaurant.dining_style}
                            </div>
                        </li>
                    </div>
                </div>

                <div className="res-form">
                    <ReservationForm/>
                </div>
            </div>
        )
    }
}

export default RestaurantShow;