import React from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';

const Topbar = () => {
  const user = false;
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className='topIcon fab fa-twitter-square'></i>
        <i className='topIcon fab fa-facebook-square'></i>
        <i className='topIcon fab fa-pinterest'></i>
        <i className='topIcon fab fa-instagram-square'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to='/'>
              HOME
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/'>
              ABOUT
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/'>
              CONTACT
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/write'>
              WRITE
            </Link>
          </li>
          <li className='topListItem'>{user && 'LOGOUT'}</li>
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <img
            className='topImg'
            src='https://image.gala.de/22422684/t/M5/v4/w960/r1.5/-/brad-pitt.jpg'
            alt=''
          />
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/login'>
                LOGIN
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/register'>
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className='topSearchIcon fas fa-search'></i>
      </div>
    </div>
  );
};

export default Topbar;
