import React, {useState} from 'react'
import * as sessionActions from '../../store/session'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory, Redirect} from 'react-router-dom'
import './SignupForm.css'

const SignupForm = () => {
    const dispatch = useDispatch()
  // const sessionUser = useSelector(state => state.session.user);
  const [username, setUsername] = useState('')
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const history = useHistory()

    const handleSubmit = async(e) => {
    e.preventDefault();
    if(password === confirmPassword){
    setErrors([])
    await dispatch(sessionActions.signup({username, email, password}))
      .catch(async(res) => {
        const data = await res.json()
        if (data && data.errors) setErrors(data.errors)
      })
      history.push('/home')
    }else{
      return setErrors(['Confirm Password field must be the same as the Password field'])
    }
    }
  return (
    <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li className='error' key={idx}>{error}</li>)}
        </ul>
      <p align='center' className='sign'>Sign Up</p>
      <div className='sign'>
        <input
          placeholder='Enter First Name'
          className='input'
          type="text"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          placeholder='Enter Last Name'
          className='input'
          type="text"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          placeholder='Enter Username'
          className='input'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          placeholder='Enter Email'
          className='input'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          placeholder='Enter Password'
          className='input'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          placeholder='Confirm Password'
          className='input'
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" className='submit'>Sign Up</button>
      </div>
    </form>
  )
}

export default SignupForm