import {csrfFetch} from './csrf'

const GET_SHIFTS = 'shifts/getAllShifts'
const NEW_SHIFT = 'shifts/createNewShift'


const setShifts = (shifts) => {
  return {
    type: GET_SHIFTS,
    payload: shifts
  }
}

const newShift = shift => ({
  type: NEW_SHIFT,
  payload: shift
})



export const createNewShift = data => async (dispatch) => {
  const response = await csrfFetch('/api/shifts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  if (response.ok) {
    const shift = await response.json()
    
    dispatch(newShift(shift.newShift))
    return shift
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
  let newState
  switch (action.type) {
    case GET_SHIFTS:
      newState = Object.assign({}, state)
      newState = action.payload
      return newState
    case NEW_SHIFT:
      newState = JSON.parse(JSON.stringify(state))
      newState.shifts.push(action.payload)
      return newState
    default:
      return state

  }
}
export default shiftsReducer

/*
case ADD_PROJECT:
      newState = Object.assign({}, state);
      const newOwned = {
        owned: [...newState.projects.owned, action.payload],
      };
      const temp = Object.assign({}, newState.projects, newOwned);
      const copyState = Object.assign({}, newState, { projects: temp });
      return copyState;


*/