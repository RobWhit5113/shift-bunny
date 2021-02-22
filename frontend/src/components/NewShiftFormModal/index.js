import React, {useState} from 'react'
import {Modal} from '../../context/Modal'
import NewShiftForm from './NewShiftForm'

function NewShiftFormModal() {

  const [showModal, setShowModal] = useState(false)

  return (
  <>
    <span className='span' onClick={() => setShowModal(true)}>Create a New Shift!</span>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <NewShiftForm />
      </Modal>
    )}
  </>
  )
}
export default NewShiftFormModal