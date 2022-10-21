// import React from 'react';
// import { FaSearch } from 'react-icons/fa'; 

// class SearchForm extends React.Component{

//     constructor(props){
//         super(props); 

//             this.state = {
//                 restName: " ", 
//                 guesses: this.props.guesses,
//                 guesses: ""
//             }
//             // this.handleSubmit = this.handleSubmit.bind(this); 
//             // this.handleInput
//     }

//     componentDidMount(){
//         this.props.searchGuesses(); 
//     }


   
//     // handleSubmit(e){
//         // e.preventDefault();

//     //     this.props.searchForRestaurants(this.state).then(() => {
//     //         this.props.push('/restaurants/query'); 
//     //     })
//     //     // this.props.getRestaurants(this.state.restaurants)
//     //     // .then (this.props.removeRestaurants())
//     // }

//     update(field){
//         return(e) =>{ this.setState({[field]: e.currentTarget.value})};
//         // this.props.getRestaurants(resName) ; 
//     }

//     // searchRestaurant = () => {
//     //     // return this.state.restaurants.filter((restaurant)) => restaurant.toLowerCase().includes(this.state.resName.toLowerCase()); 
//     // }

    
// //         };
//     //  handleInput = resName => {
//     //     return e => { this.setState({
//     //         resName: e.target.value}); 
//     //      }

//     //      this.props.
//     //         this.props.receiveRestaurant(e.target.value); 
//     //     }


    
//     // render(){
//     //     return(
//     //         <div className='search-bar'>
//     //             <input className='search-form' 
//     //                     type="search" 
//     //                     placeholder= 'Search Restaurant Here'
//     //                     value={this.state.restaurants}
//     //                     onChange={this.update('restaurants')}
//     //                     />

//     //             <button className='search-button' onClick={this.handleSubmit()}>Let's go</button>
//     //         </div>
//     //     )
//     // }

// }

// export default SearchForm; 