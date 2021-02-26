import * as sessionActions from '../../store/shifts'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {useState} from 'react'
import EditShiftForm from './EditShiftForm'
import {getAllWorkers} from '../../store/workers'
import {getAllTypes} from '../../store/types'
import './UpcomingShifts.css'
import { Modal } from '../../context/Modal'

function UpcomingShiftsModals() {
  let shiftsVals
  // let upcoming
  // const today = new Date()
  const [showModal, setShowModal] = useState(false)
  const [id, setId] = useState('')

  const dispatch = useDispatch()
  let shifts = useSelector(state => state.shift)
  if (shifts){
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

  
  let allShifts 
  if(shiftsVals?.length > 0){
    allShifts = shiftsVals.map((shift) => (
      <div className='shift-tiles' id={shift.id} onClick={(e) => {
        setId(e.target.id)
        dispatch(getAllWorkers())
        dispatch(getAllTypes())
        setShowModal(true)
      }} 
        
        key={shift.id}>
        {shift.name} 
        </div>
    ))}
  return (
    <>
      <div className='upcoming_shifts'>
        <h2 className='upcoming-title'>Upcoming Shifts:</h2>
          {allShifts}
            {showModal && (
              <Modal onClose={() => setShowModal(false)}>
                <EditShiftForm id={id} showModal={showModal} setShowModal={setShowModal}/>
              </Modal>
            )}
          
        </div>
    </>
  )
}

export default UpcomingShiftsModals