import {useSelector} from 'react-redux'


function FormPickShifter ({
  handlers,  
  values, 
  nextStep,
  prevStep
}){

  const workers = useSelector((state) => state.workers)
  const workersVals = Object.values(workers)

  const nextPage = e => {
    e.preventDefault()
    nextStep()
  }
  const prevPage = e => {
    e.preventDefault()
    prevStep()
  }
  const chooseWorker = e => {
    e.preventDefault()
    handlers.setWorker(e.target.id)
  }

  return (
   <> 
    <div className='worker-tiles'>
      {workersVals && workersVals.map((worker) => (
        <div key={worker.id} id={worker.id} onClick={chooseWorker}>{worker.first_name} {worker.last_name}</div>
      ))}
    </div>
    <button onClick={nextPage}> Continue </button>
    <button onClick={prevPage}> Back </button>
   </> 
  )
}

export default FormPickShifter