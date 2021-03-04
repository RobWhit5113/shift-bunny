import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createNewShift} from '../../store/shifts'
import {getAllTypes} from '../../store/types'
import {getRelWorkers} from '../../store/workers'

import './NewShiftForm.css'

const NewShiftForm = ({showModal, setShowModal}) => {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user)
  const types = useSelector((state) => state.types.types)
  const workers = useSelector((state) => state.workers.relWorkers)

  const [name, setName] = useState('')
  const [shiftType, setShiftType] = useState('')
  const [worker, setWorker] = useState('')
  const [startDate, setStartDate] = useState('')
  const [location, setLocation] = useState('')
  const [duration, setDuration] = useState('')
  const [cost, setCost] = useState('')
  const [description, setDescription] = useState('')
  const [completed, setCompleted] = useState(false)
  
  const findShifters = async(e) => {
    await dispatch(getRelWorkers(shiftType))
  }

  useEffect(() => {
    dispatch(getAllTypes())
    
  }, [dispatch] )

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setShowModal(!showModal)

    const payload = {
      name,
      user_id: sessionUser.id,
      worker_id: worker,
      shift_type_id: 0,
      shift_Type: shiftType,
      start_date: startDate,
      location,
      cost,
      duration, 
      description,
      completed
    }
    await dispatch(createNewShift(payload))
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='sign'>
        <input 
          type='text'
          placeholder='Name of Event'
          className='input'
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <select  
          type='select'
          placeholder='Type of Shift'
          className='input'
          required
          value={shiftType}
          onChange={e => setShiftType(e.target.value)}>
            <option value='' disabled>- pick a type of shift! -</option>
            {types && types.map(type => (
              <option key={type.id}>{type.type}</option>
            ))}
          </select>     
        <input 
          type='text'
          placeholder='Address of Shift'
          className='input'
          required
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <input 
          type='text'
          placeholder='Duration of Shift (in Minutes)'
          className='input'
          required
          value={duration}
          onChange={e => setDuration(e.target.value)}
        />
        <input 
          type='text'
          placeholder='Start Date of Shift'
          className='input'
          required
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
        />
        <input 
          type='text'
          placeholder='Maximum you want to pay per hour'
          className='input'
          required
          value={cost}
          onChange={e => setCost(e.target.value)}
        />
        <textarea 
          type='text'
          placeholder='Tell us a bit more about the Shift'
          className='input'
          required
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button type='click' onClick={findShifters} className='submit-create'>Find Shifters!</button>
        <select  
          type='select'
          placeholder='Worker'
          className='input'
          required
          value={worker}
          onChange={e => setWorker(e.target.value)}>
            <option value='' disabled>- pick a shifter! -</option>
            {workers && workers.map(worker => (
              <option key={worker.id}>{worker.id} - {worker.first_name} {worker.last_name}</option>
            ))}
          </select> 
        <button type='submit' className='submit-create' >Create Shift!</button>
      </div>
    </form>
  )

  }
export default NewShiftForm