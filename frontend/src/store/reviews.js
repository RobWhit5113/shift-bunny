import {csrfFetch} from './csrf'

const GET_REVIEWS = 'reviews/getUserReviews'

const userReviews = (reviews) => {
  return {
    type: GET_REVIEWS,
    payload: reviews
  }
}

export const getUserReviews = () => async(dispatch) => {
  const response = await fetch('/api/reviews')
  const reviews = await response.json()
  console.log(reviews)

  dispatch(userReviews(reviews))
  return response
}

const reviewsReducer = (state = {}, action) => {
  let newState

  switch (action.type){
    case GET_REVIEWS:
      newState={}
      action.payload.reviews.forEach(review => {
        newState[review.id] = review
      })
      return newState
    default:
      return state
  }
}

export default reviewsReducer