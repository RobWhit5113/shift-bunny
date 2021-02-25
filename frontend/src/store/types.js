import {csrfFetch} from './csrf'

const SHIFT_TYPES = 'types/getAllTypes'

const shiftTypes = types => {
  return{
  type: SHIFT_TYPES,
  payload: types
  }
}

export const getAllTypes = () => async (dispatch) => {
  const response = await fetch('/api/types')
  const types = await response.json()
  dispatch(shiftTypes(types))
  // return response
}

const initialState = {types: null}
const typesReducer = (state = initialState, action) => {
  let newState
  switch (action.type) {
    case SHIFT_TYPES:
      newState = Object.assign({}, state)
      newState = action.payload
      return newState
    default:
      return state
  }
}

export default typesReducer