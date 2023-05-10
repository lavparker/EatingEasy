import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createFavorite, deleteFavorite, getFavorite, getFavorites } from '../../actions/favorite_actions';
import { getRestaurant } from '../../actions/restaurant_actions';
import {FaHeart} from 'react-icons/fa';

class FavoritesCreate extends Component {
  constructor(props) {
    console.log("FAVORITES CREATE PROPS", props);

    super(props);
    const { favorite, currentUser, restaurant } = this.props;
    const isFavorited = localStorage.getItem(restaurant.id) === "true";
    this.state = {
      // isFavorited: false,
      isFavorited,
      user_id: favorite ? favorite.user_id : currentUser.id,
      restaurant_id: favorite ? favorite.restaurant_id : restaurant.id,
      // user_id: this.props.favorite ? this.props.favorite.user_id : this.props.currentUser.id,
      // restaurant_id: this.props.favorite ? this.props.favorite.restaurant_id : this.props.restaurant.id,
    };
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  componentDidMount() {
    const storedFavorite = localStorage.getItem("favorites");
    if (this.props.currentUser) {
      this.props.getFavorites().then(() => {
        const { favorites, restaurant } = this.props;
        let isFavorited = false;
        if (Array.isArray(favorites)) {
          for (let i = 0; i < favorites.length; i++) {
            if (favorites[i].restaurant_id === restaurant.id) {
              isFavorited = true;
              break;
            }
          }
        } else if (favorites && favorites.restaurant_id === restaurant.id) {
          isFavorited = true;
        }
        this.setState({ isFavorited });
      });
    }
  }

  // componentDidMount() {
  //   const storedFavorite = localStorage.getItem("favorites");
  //   if (this.props.currentUser) {
  //     this.props.getFavorites().then(() => {
  //       const { favorites, restaurant } = this.props;
  //       let isFavorited = false;
  //       if (Array.isArray(favorites)) {
  //         for (let i = 0; i < favorites.length; i++) {
  //           if (favorites[i].restaurant_id === restaurant.id) {
  //             isFavorited = true;
  //             break;
  //           }
  //         }
  //       } else if (favorites && favorites.restaurant_id === restaurant.id) {
  //         isFavorited = true;
  //       }
  //       this.setState({ isFavorited });

  //     });
  //   }
  // }
  handleFavorite(e) {
    e.preventDefault();
    const { restaurant, favorite } = this.props;
    const favoriteId = favorite ? favorite.id : null;
    // console.log("THE FAVORITEID IS", favoriteId);
    console.log("THE FAVORITE IS", this.props.favorites.id);
    console.log("THE FAVORITE IS", this.props.favorite);

    console.log("THE RESTAURANT IS", restaurant);
    console.log("IS FAVORITED", this.state.isFavorited)
    console.log("FAVORITE ID", favoriteId)
    if (this.state.isFavorited) {
      if (favoriteId) {
        this.props.deleteFavorite(favoriteId).then(() => {
          localStorage.setItem(restaurant.id, false);
          this.setState({ isFavorited: false });
        });
      }
    } else {
      this.props
        .createFavorite({
          user_id: this.props.currentUser.id,
          restaurant_id: this.props.restaurant.id,
        })
        .then(() => {
          localStorage.setItem(restaurant.id, true);
          this.setState({ isFavorited: true });
        });
    }
  }

  // handleFavorite(e) {
  //   e.preventDefault();
  //   const { restaurant, favorite } = this.props;
  //   const favoriteId = favorite ? favorite.id : null;
  //   // console.log("THE FAVORITEID IS", favoriteId);
  //   console.log("THE FAVORITE IS", this.props.favorites.id);
  //   console.log("THE RESTAURANT IS", restaurant);
  //   if (this.state.isFavorited) {
  //     if (favoriteId) {
  //       this.props.deleteFavorite(favoriteId).then(() => {
  //         localStorage.setItem(restaurant.id, false);
  //         this.setState({ isFavorited: false });
  //       });
  //     }
  //   } else {
  //     this.props
  //       .createFavorite({
  //         user_id: this.props.currentUser.id,
  //         restaurant_id: this.props.restaurant.id,
  //       })
  //       .then(() => {
  //         localStorage.setItem(restaurant.id, true);
  //         this.setState({ isFavorited: true });
  //       });
  //   }
  // }

  render() {
    const { isFavorited } = this.state;
    console.log("favorited?", this.state.isFavorited);
    return (
      <div className="show-page-fave-btn">
        <button
          onClick={this.handleFavorite}
          className={isFavorited ? "favorited" : "not-favorited"}
        >
          {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
          &nbsp;{" "}
          <FaHeart
            className={isFavorited ? "favorited-heart" : "not-favorited-heart"}
          />
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    let current_user_id = state.session.id
    let current_user = state.entities.users[current_user_id]
    // let user_id = state.entities.users.id
    // let user = state.entities.users[user_id]
    return {
      currentUser: {
        id: current_user.id,
        phone_number: "2002000200",
        first_name: current_user.first_name,
        last_name: current_user.last_name,
        email: current_user.email,
      },
      //   currentUser: state.session.currentUser,
      user_id: current_user.id,
      restaurants: Object.values(state.entities.restaurants),
      restaurant_id: ownProps.restaurant.id,
      favorites: Object.values(state.entities.favorites),

    };

}

const mapDispatchToProps = (dispatch) => (
  console.log("I AM IN THE FAVORITES CREATE CONTAINER"),
  {
    getFavorite: (favoriteId) => dispatch(getFavorite(favoriteId)),
    getFavorites: () => dispatch(getFavorites()),
    getRestaurant: (restaurantId) => dispatch(getRestaurant(restaurantId)),
    createFavorite: (favorite) => dispatch(createFavorite(favorite)),
    deleteFavorite: (favoriteId) => dispatch(deleteFavorite(favoriteId)),
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FavoritesCreate));