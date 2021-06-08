import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();
    const newUser = {
      username,
      password,
      email,
    };

    try {
      const res = await axios.post('auth/register', newUser);
      setError(false);
      res.data && window.location.replace('/login');
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
      <form action='' className='registerForm' onSubmit={handleRegistration}>
        <label>Username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          autoFocus={true}
          className='registerInput'
          type='text'
          placeholder='Enter your username...'
        />
        <label>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className='registerInput'
          type='text'
          placeholder='Enter your email...'
        />
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className='registerInput'
          type='password'
          placeholder='Enter your password...'
        />
        <button type='submit' className='registerButton'>
          Register
        </button>
      </form>
      <button className='registerLoginButton'>
        <Link className='link' to='/login'>
          Login
        </Link>
      </button>
      {error && <p style={{color:'red'}}>Registration failed, check your details</p>}
    </div>
  );
};

export default Register;
