import * as sessionActions from '../../store/shifts'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {useState} from 'react'
import EditShiftForm from './EditShiftForm'
import './UpcomingShifts.css'
import { Modal } from '../../context/Modal'

function UpcomingShiftsModals() {
  let shiftsVals
  // let upcoming
  // const today = new Date()
  const [showModal, setShowModal] = useState(false)

  const dispatch = useDispatch()
  let shifts = useSelector(state => state.shift.shifts)
  if (shifts){
    console.log('here')
  shiftsVals = Object.values(shifts)
  // upcoming = shiftsVals.filter(shift => shift.start_date > today)
  
  // let days = []
  // let times = []
  // let dates = shiftsVals.map(shift => (shift.start_date))
  // dates.forEach(date => days.push(date.split('T')[0]))
  // console.log(times)
  }

  useEffect(() => {
    shifts = dispatch(sessionActions.getAllShifts())
  }, [dispatch])


  return (
    <>
      <div className='upcoming_shifts'>
        <h2 className='upcoming-title'>Upcoming Shifts:</h2>
          
            {shiftsVals && shiftsVals.map((shift) => (
              <div className='shift-tiles' onClick={() => setShowModal(true)} key={shift.id}>
                {shift.name} 
                --- 
                </div>
            ))}
            {showModal && (
              <Modal onClose={() => setShowModal(false)}>
                <EditShiftForm />
              </Modal>
            )}
          
        </div>
    </>
  )
}

export default UpcomingShiftsModals