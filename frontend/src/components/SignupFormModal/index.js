import React, {useState} from 'react'
import {Modal} from '../../context/Modal'
import SignupForm from './SignupForm'

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false)

  return (
  <>
    <span className='span' onClick={() => setShowModal(true)}>Sign Up</span>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <SignupForm />
      </Modal>
    )}
  </>
  )
}

export default SignupFormModal