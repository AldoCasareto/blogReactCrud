import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './topbar.css';

const Topbar = () => {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <>
      <div className="container d-flex justify-content-evenly align-items-center  rounded barBackground">
        <h1>
          Kidzpaß
        </h1>
        <Link className='link' to='/'>
          Home
        </Link>

        <Link className='link' to='/write'>
          NEW COURSE
        </Link>

        <Link className='link' to='/'>
          About
        </Link>

        <Link className='link' to='/'>
          Contact
        </Link>

        <li className='topListItem' onClick={handleLogout}>
          {user && 'LOGOUT'}
        </li>
        {/* 
          <H6 className='topListItem' onClick={handleLogout}>
          {user && 'LOGOUT'}
          </H6>  */}

        {user ? (
          <Link to='/settings'>
            <img className='topImg' src={user.profilePicture} alt='' />{' '}
          </Link>
        ) : (
          <div className="d-flex justify-content-between " style={{ width: "150px" }}>
            <h6>
              <Link className='link' to='/login'>
                Logout
              </Link>
            </h6>

            <h6>

              <Link className='link' to='/register'>
                Register
              </Link>
            </h6>
          </div>


        )}
        <i className='topSearchIcon fas fa-search'></i>

      </div>

    </>
  );
};

export default Topbar;
