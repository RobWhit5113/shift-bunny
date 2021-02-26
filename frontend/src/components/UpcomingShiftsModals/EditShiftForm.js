import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {editShift, deleteOneShift, getAllShifts, markComplete} from '../../store/shifts'
import {useHistory, Redirect} from 'react-router-dom'
import {getRelWorkers} from '../../store/workers'
import './UpcomingShifts.css'
import CurrentShifter from './CurrentShifter'



function EditShiftForm({id, showModal, setShowModal}) {
  const dispatch = useDispatch()
  const shift = useSelector((state) => state.shift[id])
  const workers = useSelector((state) => state.workers)
  const types = useSelector((state) => state.types.types)
  const sessionUser = useSelector((state) => state.session.user)

  const workersArr = Object.values(workers)

  const [name, setName] = useState(shift?.name)
  const [shiftType, setShiftType] = useState(shift?.shift_type)
  const [worker, setWorker] = useState(workers && workers[shift?.worker_id])
  const [startDate, setStartDate] = useState(shift?.start_date)
  const [location, setLocation] = useState(shift?.location)
  const [duration, setDuration] = useState(shift?.duration)
  const [cost, setCost] = useState(shift?.cost)
  const [description, setDescription] = useState(shift?.description)
  const [completed, setCompleted] = useState(shift?.completed)

  //   const findShifters = async(e) => {
  //   await dispatch(getRelWorkers(shiftType))
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setShowModal(!showModal)
    const payload = {
      ...shift,
      name,
      user_id: sessionUser.id,
      worker_id: worker,
      shift_type_id: 0,
      shift_Type: shiftType,
      start_date: startDate,
      location,
      duration, 
      cost,
      description,
      completed
    }
    // console.log(name)
    await dispatch(editShift(payload))

  }
  const handleDelete = async(e) => {
    e.preventDefault()
    await dispatch(deleteOneShift({id}))
    await setShowModal(!showModal)
  }
  const handleComplete = async(e) => {
    e.preventDefault()
    await setCompleted(!completed)
  }

if(!shift){
  <Redirect to='/home'/>
}

  return (
  workers &&
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        placeholder='Name of Event'
        required
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <select  
        type='select'
        placeholder='Type of Shift'
        required
        value={shiftType}
        onChange={e => setShiftType(e.target.value)}>
          {types && types.map(type => (
            <option key={type.id}>{type.type}</option>
          ))}
        </select>     
      <input 
        type='text'
        placeholder='Address of Shift'
        required
        value={location}
        onChange={e => setLocation(e.target.value)}
      />
      <input 
        type='text'
        placeholder='Duration of Shift (in Minutes)'
        required
        value={duration}
        onChange={e => setDuration(e.target.value)}
      />
      <input 
        type='text'
        placeholder='Start Date of Shift'
        required
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
      />
      <input 
        type='text'
        placeholder='Maximum you want to pay per hour'
        required
        value={cost}
        onChange={e => setCost(e.target.value)}
      />
      <textarea 
        type='text'
        placeholder='Tell us a bit more about the Shift'
        required
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <select  
        type='select'
        placeholder='Worker'
        required
        value={worker}
        onChange={e => setWorker(e.target.value)}>
          {workersArr && workersArr.map(worker => (
            <option key={worker.id}>{worker.id} - {worker.shift_type} - {worker.first_name} {worker.last_name}</option>
          ))}
        </select> 
        {shift &&
        
        <CurrentShifter worker={worker}
                        id={id}/>
                        }
      <button type='click' onClick={handleDelete}> Cancel Shift </button>  
      <button type='click' onClick={handleComplete} className={(completed ? 'selected' : '')}>Mark completed</button> 
      {/* <button type='click' onClick={findShifters}>Find A New Shifter!</button> */}
      <button type='submit'>Save Changes Shift!</button>
    </form>
  )
}

export default EditShiftForm