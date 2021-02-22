import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {NavLink, useHistory} from 'react-router-dom'
import * as sessionActions from "../../store/session";
import '../Navigation/Navigation.css'

const DemoUser = () => {
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch()
  const history = useHistory()

    async function demoSubmit(e) {
    e.preventDefault()
    await dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' }));
    history.push('/home')
  }

  return (
    <span className='span' type='submit' onClick={demoSubmit}> Demo</span>
  )
}
export default DemoUser