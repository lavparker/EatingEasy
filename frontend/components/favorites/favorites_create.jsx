import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createFavorite,
  deleteFavorite,
  getFavorites,
  getFavorite,
} from "../../actions/favorite_actions";
import { getRestaurant } from "../../actions/restaurant_actions";
import { withRouter } from "react-router-dom";


class FavoriteButton extends Component {
  constructor(props) {
    console.log("favoritesPROPS", props)
    super(props);
    const { favorite, currentUserId, restaurant } = this.props;

    this.state = {
      isFavorite: favorite ? true: false,
      user_id: favorite ? favorite.user_id : currentUserId,
      restaurant_id: favorite ? favorite.restaurant_id : restaurant.id,
    };

    this.handleToggleFavorite = this.handleToggleFavorite.bind(this);
  }

  componentDidMount() {
    const { currentUser, restaurantId } = this.props;

    // Check if currentUser exists and has favorites
    if (
      currentUser &&
      currentUser.favorites &&
      currentUser.favorites.includes(restaurantId)
    ) {
      this.setState({ isFavorite: true });
    }
  }

  handleToggleFavorite = () => {
    const { currentUser, restaurantId, restaurant, currentUserId } = this.props;
    const { isFavorite } = this.state;

    if (isFavorite) {
      this.props.deleteFavorite(currentUserId, restaurant.id);
    } else {
      this.props.createFavorite({
        user_id: currentUserId, 
        restaurant_id: restaurant.id
      });
    }

    this.setState({ isFavorite: !isFavorite });
  };


  render() {
    const { isFavorite } = this.state;

    console.log("USERID", this.props.currentUserId);
    console.log("RESTAURANTID", this.props.restaurant.id);
    return (
      <div>
        <button onClick={this.handleToggleFavorite}>

          {isFavorite ? "Remove from favorites" : "Save to favorites"}
        </button>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    currentUser: state.session,
    currentUserId: state.session.id,
    // favorites: state.entities.favorites,
    favorites: Object.values(state.entities.favorites),

    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFavorites: (userId) => dispatch(getFavorites(userId)),
    getFavorite: (favoriteId) => dispatch(getFavorite(favoriteId)),
    createFavorite: (favorite) => dispatch(createFavorite(favorite)),
    deleteFavorite: (favoriteId) => dispatch(deleteFavorite(favoriteId)),
    getRestaurant: (restaurantId) => dispatch(getRestaurant(restaurantId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FavoriteButton));
