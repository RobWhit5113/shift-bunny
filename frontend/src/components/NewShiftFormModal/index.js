import React, {useState} from 'react'
import {Modal} from '../../context/Modal'
import NewShiftForm from './NewShiftForm'

function NewShiftFormModal() {

  const [showModal, setShowModal] = useState(false)

  return (
  <>
    <h2 className='new-shift-btn' onClick={() => setShowModal(true)}>create a new shift!</h2>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <NewShiftForm showModal={showModal}
                      setShowModal={setShowModal}/>
      </Modal>
    )}
  </>
  )
}
export default NewShiftFormModal