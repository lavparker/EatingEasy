import React from "react";
import RestaurantIndexItem from "./restaurant_index_item";


class RestaurantIndex extends React.Component{
    // constructor(props){
    //     super(props);

    //     // this.state= {}
    // }

    componentDidMount(){
        this.props.getRestaurants(); 
    }

    render(){
        // const { restaurants } = this.props;
        // debugger for reference :) 
    
        return(
            <div className="restaurants-index">
                <h2 >Local Restaurants</h2>
                
                <ul className="local-restaurants">
                    {
                        this.props.restaurants.map(restaurant => 
                             <RestaurantIndexItem
                                restaurant={restaurant}
                                key={restaurant.id}
                            />
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default RestaurantIndex; 

