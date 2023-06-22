import * as APIUtil from '../util/favorite_api_util';

export const RECEIVE_ALL_FAVORITES = "RECEIVE_ALL_FAVORITES";
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";
export const RECEIVE_CONFIRMATION = "RECEIVE_CONFIRMATION";
export const REMOVE_CONFIRMATION = "REMOVE_CONFIRMATION";


const receiveAllFavorites = favorites => ({
    type: RECEIVE_ALL_FAVORITES,
    favorites
})

const receiveFavorite = favorite => ({
    type: RECEIVE_FAVORITE,
    favorite
})

const receiveConfirmation = () => ({
    type: RECEIVE_CONFIRMATION
})

const removeFavorite = favoriteId => ({
    type: REMOVE_FAVORITE,
    favoriteId
})

export const removeConfirmation = () => ({
    type: REMOVE_CONFIRMATION
})

export const removeErrors = () => ({
    type: REMOVE_ERRORS
})

export const getFavorites = () => dispatch => (
    APIUtil.getFavorites()
        .then(favorites => dispatch(receiveAllFavorites(favorites)))
);

// export const getFavorites = (userId) => {
//   return async (dispatch) => {
//     try {
//       const favorites = await APIUtil.getFavorites(userId);
//       dispatch(receiveAllFavorites(favorites));
//     } catch (error) {
//       throw error;
//     }
//   };
// };





export const getFavorite = favoriteId => dispatch => (
    APIUtil.getFavorite(favoriteId)
        .then(favorite => dispatch(receiveFavorite(favorite)))
);

export const createFavorite = favorite => dispatch => {
    return (
        APIUtil.createFavorite(favorite)
            .then(favorite => dispatch(receiveFavorite(favorite)))
    )
}

// export const createFavorite = (favorite) => {
//   return new Promise((resolve, reject) => {
//     APIUtil.createFavorite(favorite)
//       .then((createdFavorite) => {
//         resolve(createdFavorite);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };



export const deleteFavorite = favoriteId => dispatch => (
    APIUtil.deleteFavorite(favoriteId)
        .then(() => dispatch(removeFavorite(favoriteId)))
);

