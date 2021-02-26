import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {editShift, deleteOneShift, getAllShifts} from '../../store/shifts'
import {useHistory, Redirect} from 'react-router-dom'




function EditShiftForm({id, showModal, setShowModal}) {
  const dispatch = useDispatch()
  const history = useHistory()
  const shift = useSelector((state) => state.shift[id])
  const workers = useSelector((state) => state.workers)
  const types = useSelector((state) => state.types.types)
  const sessionUser = useSelector((state) => state.session.user)

  const workersArr = Object.values(workers)

  // if(!shift){
  //   history.push('/home')
  // }
  const [name, setName] = useState(shift?.name)
  const [shiftType, setShiftType] = useState(shift?.shiftType)
  const [worker, setWorker] = useState(shift?.worker_id)
  const [startDate, setStartDate] = useState(shift?.start_date)
  const [location, setLocation] = useState(shift?.location)
  const [duration, setDuration] = useState(shift?.duration)
  const [cost, setCost] = useState(shift?.cost)
  const [description, setDescription] = useState(shift?.description)
  const [completed, setCompleted] = useState(false)

  

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

if(!shift){
  <Redirect to='/home'/>

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
            <option key={worker.id}>{worker.id} - {worker.first_name} {worker.last_name}</option>
          ))}
        </select> 
      <button type='submit'>Save Changes Shift!</button>
      <button type='click' onClick={handleDelete}> Delete Shift </button>   
    </form>
  )
}

export default EditShiftForm