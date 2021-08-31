import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './login.css';
import axios from 'axios';

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  console.log(isFetching);
  return (
    <div className='login text-center'>
      <span className='loginTitle'>Login</span>
      <form className='loginForm bg-dark' onSubmit={handleLogin}>
        <label>Username</label>
        <input
          ref={userRef}
          autoFocus={true}
          className='loginInput text-center '
          type='text'

        />
        <label>Password</label>
        <input
          ref={passwordRef}
          className='loginInput text-center '
          type='password'

        />
        <button type='submit' className='loginButton ' disabled={isFetching}>
          Login
        </button>
      </form>

      {/* Why is this here? */}

      {/*   <button className='loginRegisterButton'>
        <Link className='link' to='/register'>
          Register
        </Link>
      </button> */}
    </div>
  );
};

export default Login;
