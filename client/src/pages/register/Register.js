import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';
// import { Radio, RadioGroup } from '@chakra-ui/react';
// import { Select } from '@chakra-ui/react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [shortBio, setShortBio] = useState('');
  const [value, setValue] = useState(1);
  const [typeUser, setTypeUser] = useState('');
  const [kidName, setKidName] = useState('');
  const [kidAge, setKidAge] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();
    const newUser = {
      username,
      password,
      email,
      shortBio,
      kidName,
      kidAge,
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

        <select onChange={(e) => setTypeUser(e.target.value)}>
          <option  className='registerInput' value=''>
            Are you a parent or instructor?
          </option>
          <option className='registerInput' value='Instructor'>
            Instructor
          </option>
          <option className='registerInput' value='Parent'>
            Parent
          </option>
        </select>

        {typeUser === 'Instructor' ? (
          <>
            <label>Short Bio</label>
            <textarea
              cols='20'
              rows='10'
              onChange={(e) => setShortBio(e.target.value)}
              className='registerInput'
              type='text'
              placeholder='Enter short Bio...'
            ></textarea>
          </>
        ) : (
          <>
            <label>Kid's name</label>
            <input
              className='registerInput'
              type='text'
              onChange={(e) => setKidName(e.target.value)}
              placeholder='Kids name'
            />
            <label>Kids Age</label>
            <input
              type='number'
              className='registerInput'
              onChange={(e) => setKidAge(e.target.value)}
              placeholder='Age'
            />
          </>
        )}

        <button type='submit' className='registerButton'>
          Register
        </button>
      </form>
      <button className='registerLoginButton'>
        <Link className='link' to='/login'>
          Login
        </Link>
      </button>
      {error && (
        <p style={{ color: 'red' }}>Registration failed, check your details</p>
      )}
    </div>
  );
};

export default Register;
