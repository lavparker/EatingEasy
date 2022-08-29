import React from 'react';
import { Link } from 'react-router-dom'; 

class RestaurantIndexItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        // debugger
        return(
            <div className="restaurant-index-item">
                {/* <Link to={`/api/restaurants/`}> */}
                    <li>
                        <div className='res-photo-row-1'>
                            <p>Photo placeholder</p>
                        </div>
                        <div className='res-name-row-2'>{this.props.restaurant.name}</div>
                        <div>
                            <p>Star rating placeholder</p>
                        </div>
                        <div className='res-address-row-3'>{this.props}</div>
                        <button className='reserve-btn'>Make a Reservation</button>
                    </li>
                {/* </Link> */}
                
            </div>
        )
    }
}

export default RestaurantIndexItem;