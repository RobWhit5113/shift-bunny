import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {getRelWorkers} from '../../store/workers'
import {useEffect} from 'react'

function FormShiftDetails ({
  handlers,
  values, 
  nextStep,
}){
  const history = useHistory()
  const dispatch = useDispatch()
  

  const nextPage = async (e) => {
    e.preventDefault()
    await dispatch(getRelWorkers(values.shift_type_id))
    nextStep()
  }
  const backPage = e => {
    e.preventDefault()
    history.push('/home')
  }
  const typeHandler = async (e) => {
    await handlers.setShiftTypeId(e.target.id)
    
    if(e.target.id === 1){
      handlers.setShiftType('Bartender')
    } else if (e.target.id === 2){
      handlers.setShiftType('Server')
    } else if (e.target.id === 3){
      handlers.setShiftType('Cleaner')
    }
  }
  
  return (
   <> 
    <input 
      type='text'
      placeholder='Name of of Shift'
      className='input'
      required
      value={values.name}
      onChange={e => handlers.setName(e.target.value)}
    />
    <label>Pick a Type of Shift</label>
      <div id={1} onClick={typeHandler}>Bartender</div>
      <div id={2} onClick={typeHandler}>Server</div>
      <div id={3} onClick={typeHandler}>Cleaner</div>
    <input 
      type='text'
      placeholder='Pay Per Hour'
      className='input'
      required
      value={values.cost}
      onChange={e => handlers.setCost(e.target.value)}
    />
    <input 
      type='text'
      placeholder='Select Date (Mon, Apr 15 2021)'
      className='input'
      required
      value={values.start_date}
      onChange={e => handlers.setStartDate(e.target.value)}
    />
    <input 
      type='text'
      placeholder='Select Time (6:00pm)'
      className='input'
      required
      value={values.start_time}
      onChange={e => handlers.setStartTime(e.target.value)}
    />
    <input 
      type='text'
      placeholder='What is the Location of your shift'
      className='input'
      required
      value={values.location}
      onChange={e => handlers.setLocation(e.target.value)}
    />
    <input 
      type='text'
      placeholder='What is the duration of your shift'
      className='input'
      required
      value={values.duration}
      onChange={e => handlers.setDuration(e.target.value)}
    />
    <textarea 
      type='text'
      placeholder='Tell us a bit more about what exactly you are looking for'
      className='input'
      required
      value={values.description}
      onChange={e => handlers.setDescription(e.target.value)}
    />
    <button onClick={nextPage}> Find Shifters! </button>
   </> 
  )
}

export default FormShiftDetails