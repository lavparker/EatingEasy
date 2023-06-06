import React, { Component } from "react";

class FavoriteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false,
    };
  }

  handleFavoriteClick = () => {
    if (this.state.isFavorite) {
      this.removeFavorite();
    } else {
      this.createFavorite();
    }
  };

  createFavorite = () => {
    // Simulating API call to create a favorite
    // Assuming you have a function to create a favorite with the given user and restaurant IDs
    // You can replace this with your actual API call or database operation
    createFavoriteAPI(this.props.currentUser.id, this.props.restaurantId)
      .then((favoriteId) => {
        // Assuming favoriteId is the ID of the newly created favorite
        this.setState({ isFavorite: true });
        console.log(`Favorite created with ID: ${favoriteId}`);
      })
      .catch((error) => {
        console.error("Error creating favorite:", error);
      });
  };

  removeFavorite = () => {
    // Simulating API call to remove a favorite
    // Assuming you have a function to remove a favorite with the given user and restaurant IDs
    // You can replace this with your actual API call or database operation
    removeFavoriteAPI(this.props.currentUser.id, this.props.restaurantId)
      .then(() => {
        this.setState({ isFavorite: false });
        console.log("Favorite removed");
      })
      .catch((error) => {
        console.error("Error removing favorite:", error);
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

// Simulating API functions
const createFavoriteAPI = (userId, restaurantId) => {
  return new Promise((resolve, reject) => {
    // Assuming you have an API endpoint to create a favorite
    // You can replace this with your actual API call or database operation
    setTimeout(() => {
      // Simulating successful API response with favorite ID
      const favoriteId = "FAV123";
      resolve(favoriteId);
    }, 500);
  });
};

const removeFavoriteAPI = (userId, restaurantId) => {
  return new Promise((resolve, reject) => {
    // Assuming you have an API endpoint to remove a favorite
    // You can replace this with your actual API call or database operation
    setTimeout(() => {
      // Simulating successful API response
      resolve();
    }, 500);
  });
};

export default FavoriteButton;
