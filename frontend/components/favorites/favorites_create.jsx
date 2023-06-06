// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// // import { createFavorite, deleteFavorite, getFavorite, getFavorites } from '../../actions/favorite_actions';
// import { getRestaurant } from '../../actions/restaurant_actions';
// import {FaHeart} from 'react-icons/fa';

// class FavoritesCreate extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isFavorited: false,
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }

//   componentDidMount() {
//     this.checkFavorite();
//   }

//   checkFavorite() {
//     const { currentUser, restaurantId } = this.props;
//     getFavorites(currentUser.id).then((favorites) => {
//       const favorite = favorites.find(
//         (fav) => fav.restaurantId === restaurantId
//       ); 
//       if (favorite) {
//         this.setState({ isFavorited: true });
//       }
//     })
//      .catch((error) => {
//         console.error('Error retrieving favorites:', error);
//       });
    
//   }

//   handleClick(e) {
//     e.preventDefault(); 
//     if (this.state.isFavorited) {
//       this.deleteFavorite();
//     } else{
//       this.createFavorite();
//     }
//   }

//   render() {
//     const { restaurant, favorite, favorites, currentUser } = this.props;
//     if(!restaurant){
//       return null;
//     }
//     let isFavorited = favorites && favorites.includes(restaurant.id);
//     return (
//       <div className="show-page-fave-btn">
//         <button
//           onClick={this.handleClick}
//           className={isFavorited ? "favorited" : "not-favorited"}
//         >
//           {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
//           &nbsp;{" "}
//           <FaHeart
//             className={isFavorited ? "favorited-heart" : "not-favorited-heart"}
//           />
//         </button>
      
//       </div>
//     );
//   }

// }

// export default FavoritesCreate;
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createFavorite,
  deleteFavorite,
  getFavorites,
} from "../../actions/favorite_actions";

class FavoriteButton extends Component {
  constructor(props) {
    console.log("FavoriteButton PROPS:", props);
    super(props);
    this.state = {
      isFavorite: false, // Initialize isFavorite to false
    };
  }

  componentDidMount() {
    this.checkFavorite();
  }

  checkFavorite = async () => {
    const { currentUser, restaurantId } = this.props;
    const { getFavorites } = this.props;

    try {
      const favoritesData = await getFavorites(currentUser.id);
      const favorites = favoritesData ? Object.values(favoritesData) : [];

      if (Array.isArray(favorites)) {
        const favorite = favorites.find(
          (fav) => fav.restaurantId === restaurantId
        );
        if (favorite) {
          this.setState({ isFavorite: true });
        }
      } else {
        console.error("Favorites data is not an array:", favoritesData);
      }
    } catch (error) {
      console.error("Error retrieving favorites:", error);
    }
  };

  handleFavoriteClick = () => {
    if (this.state.isFavorite) {
      this.removeFavorite();
    } else {
      this.createFavorite();
    }
  };

  createFavorite = () => {
    const { currentUser, restaurantId } = this.props;
    const { createFavorite } = this.props;

    const favoriteData = {
      userId: currentUser.id,
      restaurantId: restaurantId,
    };

    createFavorite(favoriteData)
      .then(() => {
        this.setState({ isFavorite: true });
        console.log("Favorite created");
      })
      .catch((error) => {
        console.error("Error creating favorite:", error);
      });
  };

  removeFavorite = () => {
    const { currentUser, restaurantId } = this.props;
    const { deleteFavorite } = this.props;

    getFavorites(currentUser.id)
      .then((favorites) => {
        const favorite = favorites.find(
          (fav) => fav.restaurantId === restaurantId
        );
        if (favorite) {
          deleteFavorite(favorite.id)
            .then(() => {
              this.setState({ isFavorite: false });
              console.log("Favorite removed");
            })
            .catch((error) => {
              console.error("Error removing favorite:", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error retrieving favorites:", error);
      });
  };

  render() {
    return (
      <button onClick={this.handleFavoriteClick}>
        {this.state.isFavorite ? "Remove from favorites" : "Save to favorites"}
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session,
    currentUserId: state.session.id,
    favorites: state.entities.favorites
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFavorites: (userId) => dispatch(getFavorites(userId)),
    createFavorite: (favorite) => dispatch(createFavorite(favorite)),
    deleteFavorite: (favoriteId) => dispatch(deleteFavorite(favoriteId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
