import React from 'react';
import { FaSearch } from 'react-icons/fa'

// class SearchForm extends React.Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             resName: " ",
//         }

//         this.handleSubmit = this.handleSubmit.bind(this); 
//     }

//     // handleInput = resName => {
//     //     return e => { this.setState({
//     //         resName: e.target.value
//     //     })}

        

//     // }


// }

class SearchForm extends React.Component{

    constructor(props){
            super(props); 

            this.state = {
                resName: " ", 
            }
            // this.handleSubmit = this.handleSubmit.bind(this); 
    }
   

//         };
    //  handleInput = resName => {
    //     return e => { this.setState({
    //         resName: e.target.value}); 
    //      }

    //      this.props.
    //         this.props.receiveRestaurant(e.target.value); 
    //     }

    
    // // handleSubmit

    
    render(){
        

        return(
            <div className='search-bar'>
                <input className='search-form' type="search" placeholder= 'Search Restaurant Here'/>
                <button className='search-button'>Let's go</button>
            </div>
        )
    }

}

export default SearchForm; 