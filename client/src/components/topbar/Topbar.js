import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './topbar.css';

import KidSpass from "../../Media/KidSpass.svg"

const Topbar = () => {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <>
      <div className="container navWrap  ">
        <img src={KidSpass} className="logo">
        </img>
        <div className="barHolder  ">
          <Link className='link' to='/'>
            Home
          </Link>
          {/* apply same logic to here as with logout/regisdtert */}
          <Link className='link' to='/write'>
            New Course
          </Link>
          <Link className='link' to='/'>
            About
          </Link>
          <Link className='link' to='/'>
            Contact
          </Link>
          <h6 className='topListItem' onClick={handleLogout}>
            {user && 'Log out'}
          </h6>
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
        </div>


      </div>

    </>
  );
};

export default Topbar;


/*  */