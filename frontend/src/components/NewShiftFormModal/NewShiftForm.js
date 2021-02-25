import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createNewShift} from '../../store/shifts'
import {getAllTypes} from '../../store/types'
import {getAllWorkers, getRelWorkers} from '../../store/workers'
import {useHistory} from 'react-router-dom'

const NewShiftForm = ({showModal, setShowModal}) => {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user)
  const types = useSelector((state) => state.types.types)
  const workers = useSelector((state) => state.workers.relWorkers)

  const [name, setName] = useState('')
  const [shiftType, setShiftType] = useState('Bartender')
  const [worker, setWorker] = useState('')
  const [startDate, setStartDate] = useState('')
  const [location, setLocation] = useState('')
  const [duration, setDuration] = useState(0)
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
      duration, 
      description,
      completed
    }
    const newShift = await dispatch(createNewShift(payload))
  }
  return (
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
           {workers && workers.map(worker => (
            <option key={worker.id}>{worker.id} - {worker.first_name} {worker.last_name}</option>
          ))}
        </select> 
      <button type='submit'>Create Shift!</button>
      <button type='click' onClick={findShifters}>Find Shifters!</button>
      
    </form>
  )

  }
export default NewShiftForm