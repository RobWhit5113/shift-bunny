import { useState, useEffect } from "react"
import {useDispatch} from 'react-redux'
import {getAllTypes} from '../../store/types'
import FormShiftDetails from './FormShiftDetails'
import FormPickShifter from './FormPickShifter'
import FormConfirm from './FormConfirm'
import CreationSuccess from './CreationSuccess'


function NewShiftForm(){
  const dispatch = useDispatch()

  const [step, setStep] = useState(1)
  const[name, setName] = useState('')
  const [shift_type_id, setShiftTypeId] = useState('')
  const[start_date, setStartDate] = useState('')
  const[start_time, setStartTime] = useState('')
  const [location, setLocation] = useState('')
  const [cost, setCost] = useState('')
  const [duration, setDuration] = useState('')
  const [description, setDescription] = useState('')
  const [worker, setWorker] = useState('')

  //move to the next step
  const nextStep = () => {
    setStep(step+1)
  }
  const prevStep = () => {
    setStep(step-1)
  }

  const values = {step, location, cost, duration, description, name, shift_type_id, start_date, start_time, worker}
  const handlers = {setLocation, setCost, setDuration, setDescription, setName, setShiftTypeId, setStartDate, setStartTime, setWorker}

  switch(step){
    case 1:
      return (<FormShiftDetails
      handlers={handlers}
      values={values}
      nextStep={nextStep}
      prevStep={prevStep}
      />)
    case 2: 
      return (<FormPickShifter 
      handlers={handlers}
      values={values}
      nextStep={nextStep}
      prevStep={prevStep}
      />)
    case 3:
      return (<FormConfirm 
      values={values}
      nextStep={nextStep}
      prevStep={prevStep}
      />)  
    case 4:
      return (<h1>Success</h1>) 
  }
}

export default NewShiftForm