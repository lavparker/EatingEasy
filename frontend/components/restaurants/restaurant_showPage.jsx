import React from "react";

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
                    <button className="show-page-fave-btn">favorite button placeholder</button>
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
                            <li className="res-cuisine">Cuisine: {this.props.restaurant.cuisine}</li>

                        </ul>
                        <li className="res-details">{this.props.restaurant.details}</li>
                        <li className="res-address">Address: {this.props.restaurant.address}</li>
                        <li className="res-phone">Phone: {this.props.restaurant.phone_number}</li>
                        <li className="res-addfea">Additional Features: {this.props.restaurant.additional_features}</li>
                        <li className="res-hours">Hours: {this.props.restaurant.hours}</li>
                        <li className="res-dress">Dress Code: {this.props.restaurant.dress_code}</li>
                        <li className="res-web">Website: {this.props.restaurant.website}</li>
                        <li className="res-dinsty">Dining Style: {this.props.restaurant.dining_style}</li>
                    </div>
                </div>
            </div>
        )
    }
}

export default RestaurantShow;