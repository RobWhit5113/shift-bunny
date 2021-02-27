import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import {useHistory} from 'react-router-dom'


const ProfileButton = ({user}) => {
  const dispatch = useDispatch()
  // const [showMenu, setShowMenu] = useState(false)
  const history = useHistory()

  // const openMenu = () => {
  //   if (showMenu) return;
  //   setShowMenu(true)
  // }
  // useEffect(() => {
  //   if (!showMenu) return 

  //   const closeMenu = () => {
  //     setShowMenu(false)
  //   };

  //   document.addEventListener('click', closeMenu)

  //   return () => document.removeEventListener('click', closeMenu)
  // }, [showMenu])

  const logout = (e) => {
    e.preventDefault();
    history.push('/')
    dispatch(sessionActions.logout());
  };

    return (
    <>
      {/* <button onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button> */}
      {user && (
        <a onClick={logout} className='nav-span'>log out</a>
      )}
    </>
  );
}

export default ProfileButton;
