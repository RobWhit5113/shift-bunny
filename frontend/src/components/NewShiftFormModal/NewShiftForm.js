import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createNewShift} from '../../store/shifts'
import {useHistory} from 'react-router-dom'

const NewShiftForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const sessionUser = useSelector((state) => state.session.user)
  

  const [name, setName] = useState('')
  const [shiftType, setShiftType] = useState(1)
  const [worker, setWorker] = useState(1)
  const [startDate, setStartDate] = useState('')
  const [location, setLocation] = useState('')
  const [duration, setDuration] = useState(0)
  const [description, setDescription] = useState('')
  const [completed, setCompleted] = useState(false)
  
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      name,
      user_id: sessionUser.id,
      worker_id: worker,
      shift_type_id: shiftType,
      start_date: startDate,
      location,
      duration, 
      description,
      completed
    }
    const newShift = await dispatch(createNewShift(payload))
    if(newShift) {
      console.log('here')
      history.push('/home')
    }
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
        value={1}
        onChange={e => setShiftType(e.target.value)}>
          <option>1</option>
          <option>Waiter/Waitress</option>
          <option>Cleaner</option>
        </select>
      <select  
        type='select'
        placeholder='Worker'
        required
        value={1}
        onChange={e => setShiftType(e.target.value)}>
          <option>1</option>
          <option>Waiter/Waitress</option>
          <option>Cleaner</option>
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
      <button type='submit'>Create Shift!</button>
      
    </form>
  )

  }
export default NewShiftForm