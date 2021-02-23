import * as sessionActions from '../../store/shifts'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'

function UpcomingShifts() {
  let shiftsVals

  const dispatch = useDispatch()
  let shifts = useSelector(state => state.shift.shifts)
  if (shifts){
  shiftsVals = Object.values(shifts)
  }
  useEffect(() => {
    shifts = dispatch(sessionActions.getAllShifts())
  }, [dispatch])


  return (
    <>
      <h2>Upcoming Shifts:</h2>
      
      <ul>
        {shiftsVals && shiftsVals[0].map((shift) => (
          <li>{shift.name}</li>
        ))}
      </ul>
    </>
  )
}

export default UpcomingShifts