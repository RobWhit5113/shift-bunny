
import {csrfFetch} from './csrf'

const GET_SHIFTS = 'shifts/getAllShifts'

const setShifts = (shifts) => {
  return {
    type: GET_SHIFTS,
    payload: shifts
  }
}

export const getAllShifts = () => async(dispatch) => {
  const response = await csrfFetch('/api/shifts')
  const shifts = await response.json();

  dispatch(setShifts(shifts))
  return response
}

const initialState = {shifts: null}

const shiftsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_SHIFTS:
      newState = Object.assign({}, state)
      newState = action.payload
      return newState
    default:
      return state
  }
}
export default shiftsReducer