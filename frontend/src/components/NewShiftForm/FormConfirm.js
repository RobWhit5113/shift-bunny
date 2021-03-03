import { createNewShift } from "../../store/shifts"



function FormConfirm ({  
  values, 
  nextStep,
  prevStep
}){

  const nextPage = e => {
    e.preventDefault()
    nextStep()
  }
    const prevPage = e => {
    e.preventDefault()
    prevStep()
  }
  //Submit the form here!!

  return (
   <> 
    <input 
      type='text'
      placeholder='Address of Shift'
      className='input'
      required
      value={values.location}
    />
    <input 
      type='text'
      placeholder='Pay Per Hour'
      className='input'
      required
      value={values.pay}
    />
    <input 
      type='text'
      placeholder='Pay Per Hour'
      className='input'
      required
      value={values.duration}
    />
    <input 
      type='text'
      placeholder='Pay Per Hour'
      className='input'
      required
      value={values.description}
    />
    <button onClick={createNewShift}> Create the new shift! </button>
   </> 
  )
}

export default FormConfirm