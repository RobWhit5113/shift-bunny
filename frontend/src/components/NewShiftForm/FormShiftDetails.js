
function FormShiftDetails ({
  setLocation, 
  setPay,  
  values, 
  nextStep,
  prevStep
}){

  const nextPage = e => {
    e.preventDefault()
    nextStep()
  }

  return (
   <> 
    <input 
      type='text'
      placeholder='Address of Shift'
      className='input'
      required
      value={values.location}
      onChange={e => setLocation(e.target.value)}
    />
    <input 
      type='text'
      placeholder='Pay Per Hour'
      className='input'
      required
      value={values.pay}
      onChange={e => setPay(e.target.value)}
    />
    <button onClick={nextPage}> Continue </button>
   </> 
  )
}

export default FormShiftDetails