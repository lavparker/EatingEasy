// import { connect } from "react-redux";
// import  FavoritesCreate  from "./favorites_create";
// import { createFavorite, deleteFavorite } from "../../actions/favorite_actions";
// import { withRouter } from "react-router-dom";
// import { openModal } from "../../actions/modal_actions";

// const mapStateToProps = (state, ownProps) => {
//     const { currentUser } = state.session;
//     const { restaurant } = ownProps;
//     const favorites = state.entities.favorites;
//     return {
//         currentUser,
//         restaurant,
//         favorites,
//     };
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         getFavorites: userId => dispatch(getFavorites(userId)),
//         createFavorite: favorite => dispatch(createFavorite(favorite)),
//         deleteFavorite: favoriteId => dispatch(deleteFavorite(favoriteId)),
//         login: () => dispatch(openModal('login')),
//     };
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FavoritesCreate));