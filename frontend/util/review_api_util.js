export const getReviews = () => {
    return(
        $.ajax({
            url: '/api/reviews',
            method: 'GET'
        })
    )
}

export const getReview = id =>{
    return(
        $.ajax({
            url: `/api/reviews/${id}`,
            method: 'GET'
        })
    )
}

export const createReview = review =>{
    // console.log(review)
    return(
        $.ajax({
            url: '/api/reviews',
            method: 'POST',
            data: { review }
        })
    )
}

export const updateReview = review =>{
    return(
        $.ajax({
            url: `/api/reviews/${id}`,
            method: 'PATCH',
            data: { review }
        })
    )
}

export const deleteReview = reviewId =>{
    return(
        $.ajax({
            url: `/api/reviews/${reviewId}`,
            method: 'DELETE',
            data: { reviewId }

        })
    )
}

