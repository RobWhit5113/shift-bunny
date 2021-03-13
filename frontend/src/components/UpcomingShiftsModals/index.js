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
  let openShifts
  let futureShifts
  const [showModal, setShowModal] = useState(false)
  const [id, setId] = useState('')

  const dispatch = useDispatch()
  let shifts = useSelector(state => state.shift)
  if (shifts){
  shiftsVals = Object.values(shifts)
  }
  
  futureShifts = shiftsVals.filter(shift => new Date(shift.start_date) > new Date())
  console.log(futureShifts)
  openShifts = futureShifts.filter(shift => shift.completed === false)
  
  

  useEffect(() => {
    shifts = dispatch(sessionActions.getAllShifts())
  }, [dispatch])

  
  let allShifts 
  if(shiftsVals?.length > 0){
    allShifts = openShifts.map((shift) => (
      <div className='shift-tiles' id={shift.id} onClick={async (e) => {
        setId(e.target.id)
        await dispatch(getAllWorkers())
        await dispatch(getAllTypes())
        setShowModal(true)
      }} 
        
        key={shift.id}>{`${shift.name} - ${shift.start_date} `}</div>
    ))}
  return (
    <>
      <div className='upcoming_shifts'>
        <h2 className='upcoming-title'>upcoming shifts:</h2>
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