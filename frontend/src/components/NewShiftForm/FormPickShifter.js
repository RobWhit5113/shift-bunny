


function FormPickShifter ({
  setDuration, 
  setDescription,  
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

  return (
   <> 
    <input 
      type='text'
      placeholder='Duration of the Shift'
      className='input'
      required
      value={values.duration}
      onChange={e => setDuration(e.target.value)}
    />
    <textarea 
      type='text'
      placeholder='Give us a short description'
      className='input'
      required
      value={values.descripiton}
      onChange={e => setDescription(e.target.value)}
    />
    <button onClick={nextPage}> Continue </button>
    <button onClick={prevPage}> Back </button>
   </> 
  )
}

export default FormPickShifter