import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getOneShift} from '../../store/shifts'

function EditShiftForm({id}) {
  const dispatch = useDispatch()
  const shift = useSelector((state) => state.shift[id])
  return (
    <form>
      <h1>Hello</h1>
      <p>{shift.name}</p>
    </form>
  
  )
}

export default EditShiftForm