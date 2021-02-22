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
  const dispatch = useDispatch()
  const history = useHistory()
  
    
  async function demoSubmit(e) {
    e.preventDefault()
    await dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' }));
    history.push('/home')
  }

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
            {isLoaded && sessionLinks}
      </div>
    </div>
    )
  }

export default Navigation