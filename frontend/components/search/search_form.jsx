import React from 'react'; 
import { useState } from 'react';
import {getRestaurants} from '../../actions/restaurant_actions'; 
import { useSelector, useDispatch } from "react-redux";



function SearchQuery(){
    const [query, setQuery] = useState("")
    const restaurants = useSelector((state) => Object.values(state.entities.restaurants)); 

    console.log(query)

    return (
      <div className="search-bar-div">
        <input className="search-bar" placeholder="Search..." type="text" onChange={(e) => setQuery(e.target.value)}/>
        <ul className="list">
            {restaurants.map((restaurant) =>(
                <li className='res-restaurant'>{restaurant.name}</li>
            ))}
          
        </ul>
      </div>
    );
}

export default SearchQuery;

// class SearchQuery extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       error: null,
//       isLoaded: false,
//       restaurants: [],
//       e: "",
//       searchParam: ["name"]
//     };
//   }

//   componentDidMount() {
//     // debugger
//     this.props.getRestaurants().then(response => response.json()).then((result) =>{
//         this.setState({
//             isLoaded: true, 
//             restaurants: result.restaurants
//         }); 
//     }, 
//     (error)=> {
//         this.setState({
//             isLoaded: true, 
//             error
//         })
//     }
//     );
//     // getRestaurants()
//   }

//   searchable(restaurants){
//     return restaurants.filter((restaurant) =>{
//         return searchParam.some((newrestaurant) => {
//             return(
//                 restaurant[newrestaurant]
//                 .toString()
//                 .toLowercase()
//                 .indexOf(q.toLowerCase()) > -1
//             )
//         })
//     })
//   }

//   handleInput(e){
//     return (e) => {this.setState(e.currentTarget.value)}
//   }

//   render() {
//     const { error, isLoaded, restaurants } = this.state; 

//     // if (error){
//     //     return <div>Error: {error.message}</div>
//     // }else if (!isLoaded){
//     //     return <div>Loading...</div>
//     // }else {
//         return (
//           <div>
//             <div>
//                 <label htmlFor="search-form">
//                     <input 
//                         type="search" 
//                         name="search-form"
//                         id="search-form"
//                         className='search-input'
//                         placeholder='SearchFor...'
//                         // value={e}
//                         onChange={this.handleInput('e')} 
//                     />
//                     <span>Search Restaurants Here</span>
//                 </label>
//             </div>
//             <ul>
//               {restaurants.map((restaurant) => (
//                 <li key={restaurant.id}>{restaurant.name}</li>
//               ))}
//             </ul>
//           </div>
//         );
//     }
   
//   }
// //    debugger
//     // const { restaurants } = this.props;

//     // console.log('THESE ARE THE RESSYS' + this.props.restaurants.length);

//     // return <div>This is working</div>;


// export default SearchQuery; 