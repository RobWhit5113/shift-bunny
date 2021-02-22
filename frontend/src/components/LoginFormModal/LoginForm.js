import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom'
import './LoginForm.css'

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    await dispatch(sessionActions.login({ credential, password }))
    .catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
      );
      history.push('/home')
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
        <p align='center' className='sign'>Login</p>
          <div className='sign'>
            <input
              placeholder='Enter Username'
              className='input'
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
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
        
          <button type="submit" className='submit'>Log In</button>
        </div>
    </form>
  );
}

export default LoginForm;