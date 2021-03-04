import { createNewShift } from "../../store/shifts"
import {useSelector, useDispatch} from 'react-redux'

function FormConfirm ({  
  values, 
  nextStep,
  prevStep
}){
  const dispatch = useDispatch(0)
  const sessionUser = useSelector((state) => state.session.user)
  const workers = useSelector((state) => state.workers)

  // const nextPage = e => {
  //   e.preventDefault()
  //   nextStep()
  // }
    const prevPage = e => {
    e.preventDefault()
    prevStep()
  }
  //Submit the form here!!
  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      name: values.name,
      user_id: sessionUser.id,
      worker_id: values.worker,
      shift_type_id: values.shift_type_id,
      start_date: values.start_date,
      start_time: values.start_time,
      location: values.location,
      cost: values.cost,
      duration: values.duration,  
      description: values.description,
    }
    await dispatch(createNewShift(payload))
    nextStep()
  }

  return (
   <> 
    <input 
      type='text'
      className='input'
      required
      value={values.name}
      
    />

    <input 
      type='text'
      className='input'
      required
      value={values.cost}
      
    />
    <input 
      type='text'
      className='input'
      required
      value={values.start_date}
    />
    <input 
      type='text'
      className='input'
      required
      value={values.start_time}
    />
    <input 
      type='text'
      className='input'
      required
      value={values.location}
      
    />
    <input 
      type='text'
      className='input'
      required
      value={values.duration}
      
    />
    <textarea 
      type='text'
      className='input'
      required
      value={values.description}
      
    />
    <input 
      type='text'
      className='input'
      required
      value={`${workers[values.worker].first_name} ${workers[values.worker].last_name}`}
      
    />

    <button onClick={handleSubmit}> Create the new shift! </button>
    <button onClick={prevPage}> Back </button>

   </> 
  )
}

export default FormConfirm