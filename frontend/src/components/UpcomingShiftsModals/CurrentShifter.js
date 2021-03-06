import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {editShift, deleteOneShift, getAllShifts, markComplete} from '../../store/shifts'
import {useHistory, Redirect} from 'react-router-dom'
import './CurrentShift.css'

function CurrentShifter({id}){
  const shift = useSelector((state) => state?.shift[id])
  const workers = useSelector((state) => state?.workers)
  const worker = (workers && workers[shift.worker_id])
  

  if(!shift){
    <Redirect to='/home'/>
  }

  return (
    worker &&
    <div className='current-shifter'>
      <p>Current Shifter: {`${worker.first_name} ${worker.last_name}` } </p>
    </div>
  )
}

export default CurrentShifter