import React, {useState} from 'react'
import {Modal} from '../../context/Modal'
import SignupForm from './SignupForm'

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false)

  return (
  <>
    <a className='span' onClick={() => setShowModal(true)}>sign up</a>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <SignupForm />
      </Modal>
    )}
  </>
  )
}

export default SignupFormModal