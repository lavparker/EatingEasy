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
                <div className="show-page-res-img">
                    <img src={this.props.restaurant.photoUrl} alt="restaurant image" />
                    <div className="show-page-fave-btn">
                    <p>favorite button placeholder</p>
                    </div>
                </div>
                <div className="show-page-gen-res">
                    <div className="show-page-res-info-bar">
                    <p>Overview reviews</p>
                </div>
                </div>
                

                <div className="show-page-res-info">
                    <ul>

                    </ul>
                </div>
                <h1 className="show-page-res-name">{this.props.restaurant.name}</h1>
                <li>Address: {this.props.restaurant.address}</li>
                <li>Phone: {this.props.restaurant.phone_number}</li>
                <li>Cuisine: {this.props.restaurant.cuisine}</li>
                <li>Details: {this.props.restaurant.details}</li>
                <li>Additional Features: {this.props.restaurant.additional_features}</li>
                <li>Hours: {this.props.restaurant.hours}</li>
                <li>Dress Code: {this.props.restaurant.dress_code}</li>
                <li>Website: {this.props.restaurant.website}</li>
                <li>Dining Style: {this.props.restaurant.dining_style}</li>

            </div>
        )
    }
}

export default RestaurantShow;