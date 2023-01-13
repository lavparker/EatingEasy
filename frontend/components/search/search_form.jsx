import React from 'react';
import Link from 'react-router-dom';
import { withRouter } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa'; 
// import { FaRegFileCode } from "react-icons/fa";

// class SearchForm extends React.Component{

//     constructor(props){
//         super(props); 

//         this.state = {
//             resName: "", 
//             // guesses: this.props.guesses,
//             searchBox: false 
//         }; 

//         this.handleSubmit = this.handleSubmit.bind(this); 
//         this.handleInput = this.handleInput.bind(this);
//         this.queryBox = this.queryBox.bind(this);

//     }

//     componentDidMount(){
//         this.props.searchGuesses(); 
//     }

//     queryBox(){
//         (this.state.resName.length >= 1 ) ? this.setState({ isShowing: true }) : this.setState({ isShowing: false }); 
//     }

//     handleInput(event){
//         this.setState({ 
//             resName: event.target.value  
//         }); 

//         event.target.value.length >= 1 ? this.setState({ isShowing: true }) : this.setState({ isShowing: false })

//     }

//    handleSubmit(event) {
//         event.preventDefault();
//         this.props.searchRestaurants(this.state).then(() =>{
//             this.props.history.push('api/restaurant/search')
//         })

//    }

//     stringIncludeKey(str, key){
//         if(!key.length) return true;
        

//         let nextKeyChar = key[0];
//         let keyIndex = str.indexOf(nextKeyChar);

//         if (keyIndex < 0) return false;
//         return stringIncludeKey(string.slice(keyIndex + 1), key.slice(1));
//    }


//    render(){
//     const visible = this.state.isShowing ? "vis" : ""; 

//     // const matches = this.props.restaurants.filter((restaurant) => {
//     //     return(this.state.resName === '' || this.stringIncludeKey(restaurant.name, this.state.resName))
//     // });

//     const restaurantName = matches.map((restaurant, i) =>{
//         return(
//             <Link to={`/restaurant/vis/${restaurant.id}`}  key={i}>
//                 <li>{restaurant.name}</li>
//             </Link>
//         )
//     })



    

//    }

    
//     render(){
//         return(
//             <div className='search-bar'>
//                 <input className='search-form' 
//                         type="search" 
//                         placeholder= 'Search Restaurant Here'
//                         value={this.state.restaurants}
//                         onChange={this.update('restaurants')}
//                         />

//                 <button className='search-button' onClick={this.handleSubmit()}>Let's go</button>
//             </div>
//         )
//     }

// }

// export default SearchForm; 



// import React from "react";

// function SearchBar({placeholder, data}){
//     return(
//         <div className="searchBar">
//             <div className="searchInputs">
//                 <input type="text" placeholder={placeholder} data=/>
//                 <div className="searchIcon"></div>
//             </div>
//             <div className="dataResult"></div>
//         </div>
//     )
// }

// export default SearchBar;

// const dataByid = 

// const resById = restaurants.reduce((prev, next)=>{
//     prev[next.id] = next;
//     return prev;
// }, {});

// class AutoCompleteResult extends React.Component{
//     render(){
//         const result = resById[this.props.restaurantId];

//         return <div> {result.title} </div>
//     }
// }

class SearchForm extends React.Component{
    // constructor(props){
    //     super(props);

        state={
            inputValue: '',
           
        };
    // }

    searchRestaurantName = (e) =>{
        this.setState({ inputValue: e.target.value}); 
        this.props.searchRestaurants(e.target.value)
    }

    restaurantNames = () =>{
        return this.state.restaurants.filter((resName) =>{
            resName.toLowerCase().includes(this.state.inputValue.toLocaleLowerCase())
        })
    }

    correctRestaurantSelect = (resName) => {
        this.setState({ inputValue: resName})
        this.props.searchRestaurants(resName)
    }

    render(){
        return(
            <div className='search-container'>
                <input 
                    type="text"
                    className='search-bar-input'
                    value={this.state.inputValue}
                    onChange={this.searchRestaurantName}
                    placeholder="Search for Restaurant Name" />
                
            </div>
        )
    }

    // render(){
    //     return(
    //         <div>
    //             <div>
    //                 <input 
    //                 value={this.state.inputValue}
    //                 onChange={(e) =>{
    //                     this.setState({inputValue: e.target.value})
    //                 }} type="text" 
    //             />
    //             </div>
                
    //             <div>
    //                 {restaurant.result
    //                     .filter((result) =>{
    //                     return result.title
    //                         .toLowerCase()
    //                         .includes(this.state.inputValue.toLowerCase());
    //                 })
    //                 .map((result) =>{
    //                     return(
    //                         <AutoCompleteResult key={result.id} resultId={result.id}/>
    //                     );
    //                 })}
    //             </div>
    //         </div>
    //     )
    // }
};

export default SearchForm; 