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
      <ul className='main-nav'>  
        <ProfileButton user={sessionUser} />
      </ul>
    )
  } else {
    sessionLinks = (
      <ul className='main-nav'>
        <li><LoginFormModal/></li>
        {/* <li><SignupFormModal/></li>
        <li><DemoUser /></li> */}
      </ul>
    );
  }
  return (
    
    <header className='header'>
      <div className='logo'>
        <img className='bunnyImg' src='/images/bunny-only-logo.png' />
      </div>
      <h2>shift-bunny</h2>
          {isLoaded && sessionLinks}   
    </header>
    
    )
  }

export default Navigation