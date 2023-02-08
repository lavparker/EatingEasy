import * as APIUtil from "../util/review_api_util"; 

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS"; 
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
// export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW"; 
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS"; 

const receiveAllReviews = reviews => ({
    type: RECEIVE_ALL_REVIEWS, 
    reviews
})

const receiveReview = review =>({
    type: RECEIVE_REVIEW,
    review
})

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const receiveErrors = errors =>({
    type: RECEIVE_ERRORS,
    errors
})

export const removeErrors = () => ({
    type: REMOVE_ERRORS
})

export const getReviews = () => dispatch =>(
    APIUtil.getReviews()
    .then(reviews => dispatch(receiveAllReviews(reviews)))
); 

export const getReview = reviewId => dispatch =>(
    APIUtil.getReview(reviewId)
    .then(review => dispatch(receiveReview(review)))
);

export const createReview = review => dispatch =>(
    APIUtil.createReview(review)
    .then(review => {
        dispatch(receiveReview(review))
    }), err => (dispatch(receiveErrors(err.responseJSON)))
)

export const updateReview = review => dispatch =>(
    APIUtil.updateReview(review)
    .then(review =>(dispatch(receiveReview(review))), 
    err => (dispatch(receiveErrors(err.responseJSON))))
)

export const deleteReview = reviewId => dispatch (
    APIUtil.deleteReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)))
)

