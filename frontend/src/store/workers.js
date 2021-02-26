import {csrfFetch} from './csrf'

const GET_WORKERS = 'workers/getWorkers'
const GET_REL_WORKERS = 'workers/getRelWorkers'

const getWorkers = workers => {
  return{
    type: GET_WORKERS,
    payload: workers
  }
}

const getSomeWorkers = workers => {
  return {
    type: GET_REL_WORKERS,
    payload: workers
  }
}

export const getAllWorkers = () => async(dispatch) => {
  const response = await fetch('/api/workers')
  const workers = await response.json()
  dispatch(getWorkers(workers))
}

export const getRelWorkers = (shiftType) => async(dispatch) => {
  const response = await fetch(`/api/workers/${shiftType}`)
  const relWorkers = await response.json()
  dispatch(getSomeWorkers(relWorkers))
}

// const initialState = {types: null}
const workersReducer = (state= {}, action) => {
  let newState
  switch(action.type) {
    case GET_WORKERS:
      newState = JSON.parse(JSON.stringify(state))
      action.payload.workers.forEach(worker => {
        newState[worker.id] = worker
      })
      return newState
    case GET_REL_WORKERS:
      newState = JSON.parse(JSON.stringify(state))
      newState = action.payload
      return newState
    default:
      return state
  }
}

export default workersReducer