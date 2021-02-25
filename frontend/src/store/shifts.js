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
  console.log('heeeeeeeeeeeer', data)
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

// export const getOneShift = (id) => async(dispatch) => {
//   const response = await fetch(`/api/shifts/${id}`)
//   const shift = await response.json()

//   dispatch(setShifts(shift))
//   return response
// }



export const getAllShifts = () => async(dispatch) => {
  const response = await fetch('/api/shifts')
  const shifts = await response.json();

  dispatch(setShifts(shifts))
  return response
}

// const initialState = {shifts: null}

const shiftsReducer = (state = {}, action) => {
  let newState
  switch (action.type) {
    case GET_SHIFTS:
      newState = Object.assign({}, state)
      action.payload.shifts.forEach(shift => {
        newState[shift.id] = shift
      })
      return newState
    case NEW_SHIFT:
      newState = JSON.parse(JSON.stringify(state))
      newState[action.payload.id] = action.payload
      return newState
    default:
      return state

  }
}
export default shiftsReducer

      // newState = JSON.parse(JSON.stringify(state))
      // action.payload.shifts.forEach(shift => {
      //   newState[shift.id] = shift
      // })
      // return newState