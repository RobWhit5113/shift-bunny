import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {NavLink, useHistory} from 'react-router-dom'
import ProfileButton from './ProfileButton'
import LoginFormModal from '../LoginFormModal'
import SignupFormModal from '../SignupFormModal'
import DemoUser from '../DemoUser'
import './Navigation.css'
import * as sessionActions from "../../store/session";


const Navigation = ({isLoaded}) => {
  const sessionUser = useSelector(state => state.session.user)

  let sessionLinks;
  if(sessionUser){
    sessionLinks = (
      //where we will build Nav bar for the home page
      <ProfileButton user={sessionUser} />
    )
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
        <DemoUser />
      </>
    );
  }
  return (
    <div className='demo'>
      <div className='header'>
        <div className='bunny'>
          <img className='bunnyImg' src='/images/bunny-only-logo.png' />
        </div>
        <div className='navLinks'>
            {isLoaded && sessionLinks}
        </div>
      </div>
    </div>
    )
  }

export default Navigation