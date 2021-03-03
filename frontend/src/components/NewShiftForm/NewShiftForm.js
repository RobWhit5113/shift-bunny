import { useState } from "react"
import FormShiftDetails from './FormShiftDetails'
import FormPickShifter from './FormPickShifter'
import FormConfirm from './FormConfirm'
import CreationSuccess from './CreationSuccess'


function NewShiftForm(){

  const [step, setStep] = useState(1)
  const [location, setLocation] = useState('')
  const [pay, setPay] = useState('')
  const [duration, setDuration] = useState('')
  const [description, setDescription] = useState('')

  //move to the next step
  const nextStep = () => {
    setStep(step+1)
  }
  const prevStep = () => {
    setStep(step-1)
  }

  const values = {step, location, pay, duration, description}

  switch(step){
    case 1:
      return (<FormShiftDetails
      setLocation={setLocation}
      setPay={setPay}

      values={values}
      nextStep={nextStep}
      prevStep={prevStep}
      />)
    case 2: 
      return (<FormPickShifter 
      setDuration={setDuration}
      setDescription={setDescription}
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