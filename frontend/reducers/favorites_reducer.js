import { RECEIVE_ALL_FAVORITES, RECEIVE_FAVORITE, REMOVE_FAVORITE } from '../actions/favorite_actions';

const favoritesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_FAVORITES:
            return action.favorites;
        case RECEIVE_FAVORITE:
            console.log("FAVORITE REDUCER", action.favorite);
            nextState[action.favorite.id] = action.favorite;
            return nextState;
        case REMOVE_FAVORITE:
            delete nextState[action.favoriteId];
            return nextState;
        default:
            return oldState;
    };
}

export default favoritesReducer;