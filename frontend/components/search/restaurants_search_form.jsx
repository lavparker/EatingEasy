import React from 'react'; 
// import RestaurantsIndex from './restaurants_search_index';

// class RestaurantsSearch extends React.Component{
//     constructor(){
//         super(); 
//         this.state={searchTerm: 'Find a Restaurant Here'}; 
//         this.handleChange = this.handleChange.bind(this); 
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     componentDidMount(){
//         this.props.getSearchRestaurants('Find+a+Restaurant+Here')
//     }

//     handleChange(e){
//         this.setState({ searchTerm: e.currentTarget.value}); 
//     }

//     handleSubmit(e){
//         e.preventDefault(); 
//         let searchTerm = this.state.searchTerm.split(' ').join('+'); 
//         this.props.getSearchRestaurants(searchTerm); 
//     }

//     render(){
//         let {restaurants} = this.props; 

//         return(
//             <div>
//                 <form className='search-bar'>
//                     <input value={this.state.searchTerm} onChange={this.handleChange} />
//                     <button type="submit" onClick={this.handleSubmit}>Search Restaurants</button>
//                 </form>
//                 <RestaurantsIndex restaurants={restaurants} />
//             </div>
//         )
//     }
// }

// export default RestaurantsSearch; 