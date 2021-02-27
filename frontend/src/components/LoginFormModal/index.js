import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'


function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);


  return (
    <>
      <span className='nav-span' onClick={() => setShowModal(true)}>log in</span>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;