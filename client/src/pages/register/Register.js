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
    <div className='register bg-light w-50 mt-5 rounded'>
      <span className='registerTitle'>Register</span>
      <form action='' className='registerForm' onSubmit={handleRegistration}>
<<<<<<< HEAD
        <div className='row'>
          <div className='col-6 d-flex flex-column'>
=======
        <div className="row">

          <div className="col-6 d-flex flex-column">
>>>>>>> 8bb854284fdb3346aacde12811602b8bdc398bf5
            <label>Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              autoFocus={true}
              className='registerInput'
              type='text'
              placeholder='Enter your username...'
            />
          </div>
<<<<<<< HEAD
          <div className='col-6 d-flex flex-column'>
=======
          <div className="col-6 d-flex flex-column">
>>>>>>> 8bb854284fdb3346aacde12811602b8bdc398bf5
            <label>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className='registerInput'
              type='text'
              placeholder='Enter your email...'
            />
          </div>
        </div>
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className='registerInput'
          type='password'
          placeholder='Enter your password...'
        />
        <div
          className='bg-info w-75 mt-3 rounded align-self-center'
          onChange={(e) => setTypeUser(e.target.value)}
        >
          <p className='registerInput'>Are you a parent or instructor?</p>
          <div>
            <label>
              <input
                type="radio"
                // className='registerInput'
                value='Instructor'
                onChange={(e) => setTypeUser(e.target.value)}
                checked={typeUser === 'Instructor'}
              />
              Instructor
            </label>
            <label>
              <input
                type='radio'
                // className='registerInput'
                value='Parent'
                onChange={(e) => setTypeUser(e.target.value)}
                checked={typeUser === 'Parent'}
              />
              Parent
            </label>
          </div>
        </div>

<<<<<<< HEAD
        
        {typeUser === 'Instructor' && (
=======
        <select className="bg-info w-75 mt-3 rounded align-self-center" onChange={(e) => setTypeUser(e.target.value)}>
          <option className='registerInput' value=''>
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
>>>>>>> 8bb854284fdb3346aacde12811602b8bdc398bf5
          <>
            <label>Short Bio</label>
            <textarea
              cols='20'
              rows='2'
              onChange={(e) => setShortBio(e.target.value)}
              // className='registerInput'
              type='text'
              placeholder='Enter short Bio...'
            ></textarea>
          </>
        )}
        {typeUser === 'Parent' && (
          <>
<<<<<<< HEAD
            <div className='row'>
              <div className='col-6 d-flex flex-column'>
=======
            <div className="row">
              <div className="col-6 d-flex flex-column">
>>>>>>> 8bb854284fdb3346aacde12811602b8bdc398bf5
                <label>Kid's name</label>
                <input
                  className='registerInput'
                  type='text'
                  onChange={(e) => setKidName(e.target.value)}
                  placeholder='Kids name'
                />
              </div>
<<<<<<< HEAD
              <div className='col-6 d-flex flex-column'>
=======
              <div className="col-6 d-flex flex-column">
>>>>>>> 8bb854284fdb3346aacde12811602b8bdc398bf5
                <label>Kids Age</label>
                <input
                  type='number'
                  className='registerInput'
                  onChange={(e) => setKidAge(e.target.value)}
                  placeholder='Age'
                />
              </div>
            </div>
          </>
        )}
        <button type='submit' className='registerButton'>
          Register
        </button>
      </form>
      <button className='registerLoginButton bg-info'>
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
