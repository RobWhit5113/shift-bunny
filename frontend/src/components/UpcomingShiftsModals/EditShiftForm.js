import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'




function EditShiftForm({shiftEdit}) {
  console.log(shiftEdit)
  return (
    <form>
      <h1>Hello</h1>
      <p>{shiftEdit}</p>
    </form>
  
  )
}

export default EditShiftForm