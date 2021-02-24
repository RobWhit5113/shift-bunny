import * as sessionActions from '../../store/shifts'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import './UpcomingShifts.css'

function UpcomingShifts() {
  let shiftsVals
  let upcoming
  const today = new Date()

  const dispatch = useDispatch()
  let shifts = useSelector(state => state.shift.shifts)
  if (shifts){
    console.log('here')
  shiftsVals = Object.values(shifts)
  // upcoming = shiftsVals.filter(shift => shift.start_date > today)
  
  let days = []
  let times = []
  let dates = shiftsVals.map(shift => (shift.start_date))
  dates.forEach(date => days.push(date.split('T')[0]))
  console.log(times)
  }

  useEffect(() => {
    shifts = dispatch(sessionActions.getAllShifts())
  }, [dispatch])


  return (
    <>
      <div className='upcoming_shifts'>
        <h2 className='upcoming-title'>Upcoming Shifts:</h2>
          
            {shiftsVals && shiftsVals.map((shift) => (
              <div className='shift-tiles' key={shift.id}>
                {shift.name} 
                --- 
                {shift.start_date}
                ---
                </div>
            ))}
          
        </div>
    </>
  )
}

export default UpcomingShifts