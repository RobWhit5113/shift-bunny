import {csrfFetch} from './csrf'

const GET_SHIFTS = 'shifts/getAllShifts'
const NEW_SHIFT = 'shifts/createNewShift'
const DELETE_SHIFT = 'shifts/deleteShift'


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

const deleteShift = id => ({
  type: DELETE_SHIFT,
  payload: id
})


export const createNewShift = data => async (dispatch) => {
  const response = await csrfFetch('/api/shifts', {
    method: 'POST',
    body: JSON.stringify(data)
  })
  if (response.ok) {
    const shift = await response.json()
    
    dispatch(newShift(shift.newShift))
    return shift
  }
}


export const editShift = data => async (dispatch) => {
// console.log(data.name)
const response = await csrfFetch(`/api/shifts/${data.id}`, {
  method: 'PUT',
  body: JSON.stringify(data)
})

  if (response.ok) {
    const shifts = await response.json()
    dispatch(setShifts(shifts))
  }
}

export const deleteOneShift = ({id}) => async(dispatch) => {
  // console.log(id)
  const response = await csrfFetch(`/api/shifts/${id}`,{
  method: 'DELETE'
  })
  if(response.ok) {
    const shifts = await response.json()
    dispatch(setShifts(shifts))
  }
}

export const getAllShifts = () => async(dispatch) => {
  const response = await fetch('/api/shifts')
  const shifts = await response.json();

  dispatch(setShifts(shifts))
  return response
}



const shiftsReducer = (state = {}, action) => {
  let newState
  switch (action.type) {
    case GET_SHIFTS:
      newState = {}
      action.payload.shifts.forEach(shift => {
        newState[shift.id] = shift
      })
      return newState
    case NEW_SHIFT:
      newState = JSON.parse(JSON.stringify(state))
      newState[action.payload.id] = action.payload
      return newState
    // case DELETE_SHIFT:
    //   newState = JSON.parse(JSON.stringify(state))
    //   delete newState[action.payload].shift
    //   return newState
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