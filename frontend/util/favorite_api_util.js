export const getFavorites = () => {
    return (
        $.ajax({
            url: '/api/favorites',
            method: 'GET'
        })
    )
}

export const getFavorite = id => {
    return (
        $.ajax({
            url: `/api/favorites/${id}`,
            method: 'GET'
        })
    )
}

export const createFavorite = favorite => {
    return (
        $.ajax({
            url: '/api/favorites',
            method: 'POST',
            data: { favorite }
        })
    )
}

export const deleteFavorite = favoriteId => {
    return (
        $.ajax({
            url: `/api/favorites/${favoriteId}`,
            method: 'DELETE',
            data: { favoriteId }

        })
    )
}

