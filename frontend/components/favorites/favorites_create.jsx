// import React, { Component } from "react";
// import { connect } from "react-redux";
// import {
//   createFavorite,
//   deleteFavorite,
//   getFavorites,
//   getFavorite,
// } from "../../actions/favorite_actions";
// import { getRestaurant } from "../../actions/restaurant_actions";
// import { FaHeart } from "react-icons/fa";
// import { withRouter } from "react-router-dom";


// class FavoriteButton extends Component {
//   constructor(props) {
//     console.log("favoritesPROPS", props)
//     super(props);
//     const { favorite, currentUserId, restaurant } = this.props;

//     this.state = {
//       isFavorite: favorite ? true: false,
//       user_id: favorite ? favorite.user_id : currentUserId,
//       restaurant_id: favorite ? favorite.restaurant_id : restaurant.id,
//     };

//     this.handleToggleFavorite = this.handleToggleFavorite.bind(this);
//   }

//   componentDidMount() {
//     const { currentUser, restaurantId } = this.props;

//     // Check if currentUser exists and has favorites
//     if (
//       currentUser &&
//       currentUser.favorites &&
//       currentUser.favorites.includes(restaurantId)
//     ) {
//       this.setState({ isFavorite: true });
//     }else {
//       const isFavorite = localStorage.getItem("isFavorite") === "true";
//       this.setState({ isFavorite });
//     }
//   }

//   handleToggleFavorite = () => {
//     const { currentUser, restaurantId, restaurant, currentUserId } = this.props;
//     const { isFavorite } = this.state;

//     if (isFavorite) {
//       this.props.deleteFavorite(currentUserId, restaurant.id);
//     } else {
//       this.props.createFavorite({
//         user_id: currentUserId, 
//         restaurant_id: restaurant.id
//       });
//       localStorage.setItem("isFavorite", "true")
//     }

//     this.setState({ isFavorite: !isFavorite });
//   };


//   render() {
//     const { isFavorite } = this.state;
//     return (
//       <div>
//         {isFavorite ? (
//           <button
//             onClick={this.handleToggleFavorite}
//             className="show-page-fave-btn"
//           >
//             <FaHeart className="favorited-heart" /> Restaurant Saved!{" "}
//           </button>
//         ) : (
//           <button
//             onClick={this.handleToggleFavorite}
//             className="show-page-fave-btn"
//           >
//             <FaHeart className="not-favorited-heart" /> Save this Restaurant{" "}
//           </button>
//         )}
//       </div>
//     );
//   }
// }


// const mapStateToProps = (state) => {
//   return {
//     currentUser: state.session,
//     currentUserId: state.session.id,
//     // favorites: state.entities.favorites,
//     favorites: Object.values(state.entities.favorites),

    
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getFavorites: (userId) => dispatch(getFavorites(userId)),
//     getFavorite: (favoriteId) => dispatch(getFavorite(favoriteId)),
//     createFavorite: (favorite) => dispatch(createFavorite(favorite)),
//     deleteFavorite: (favoriteId) => dispatch(deleteFavorite(favoriteId)),
//     getRestaurant: (restaurantId) => dispatch(getRestaurant(restaurantId)),
//   };
// };

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FavoriteButton));
