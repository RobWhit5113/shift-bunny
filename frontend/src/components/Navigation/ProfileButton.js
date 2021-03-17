import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import {useHistory} from 'react-router-dom'


const ProfileButton = ({user}) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const logout = (e) => {
    e.preventDefault();
    history.push('/')
    dispatch(sessionActions.logout());
  };

    return (
    <>
      {user && (
        <a onClick={logout} className='nav-span'>log out</a>
      )}
    </>
  );
}

export default ProfileButton;
