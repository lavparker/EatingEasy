import { React, useState} from 'react'; 
import { useSelector, useDispatch } from "react-redux";

function RestaurantSearchForm(){
    const [restaurantNames, setRestaurantNames] = useState([]); 
    const [query, setQuery] = useState(""); 
    const restaurants = useSelector((state) =>
      Object.values(state.entities.restaurants)
    ); 

    const searchFilter = (e) => {
        const queryWord = e.target.value; 
        setQuery(queryWord); 
        const newFilter = restaurants.filter((value) =>{
            return value.name.toLowerCase().includes(queryWord.toLowerCase())
        }); 

        if(queryWord === ""){
            setRestaurantNames([])
        }else{
            setRestaurantNames(newFilter)
        }
    }

    const clearSearch = () => {
        setRestaurantNames([]); 
        setQuery(""); 
    }

    return(
        <div className='search-bar'>
            <div className='input-search'>
                <input 
                    type="text"
                    placeholder='Search...'
                    value={query}
                    onchange={searchFilter} 
                />
            </div>

            {restaurantNames.length != 0 && (
                <div className='search-results'>
                    { restaurantNames.slice(0, 15).map((value, key) =>{
                        return(
                            <a className="restaurant-search-item" href={value.id} target="_blank">
                                {value.name}
                            </a>
                        )
                    })}
                </div>
            ) }

        </div>
    )

}

export default RestaurantSearchForm; 
