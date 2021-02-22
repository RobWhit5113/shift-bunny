import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {NavLink, useHistory} from 'react-router-dom'
import ProfileButton from './ProfileButton'
import LoginFormModal from '../LoginFormModal'
import SignupFormModal from '../SignupFormModal'
import './Navigation.css'
import * as sessionActions from "../../store/session";


const Navigation = ({isLoaded}) => {
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch()
  const history = useHistory()
  
    
  function demoSubmit(e) {
    e.preventDefault()
    dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' }));
    history.push('/home')
    // console.log('button function')
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
        <LoginFormModal className='button'/>
        <SignupFormModal />
        <button type='submit' onClick={demoSubmit}> Demo</button>
      </>
    );
  }
  return (
    <div className='demo'>
      {/* <ul>
        <li> */}
          {isLoaded && sessionLinks}
        {/* </li>
      </ul> */}
    </div>
  )
}

export default Navigation