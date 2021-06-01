import React from 'react';
import './sidebar.css';

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img
          src='https://www.cwazores.com/Images/swd_george_karbus_02.jpg'
          alt=''
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vitae
          cumque fuga repellat. Excepturi laboriosam suscipit deleniti illo qui,
          labore voluptatum at!
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>LIFE</li>
          <li className='sidebarListItem'>MUSIC</li>
          <li className='sidebarListItem'>STYLE</li>
          <li className='sidebarListItem'>SPORT</li>
          <li className='sidebarListItem'>TECH</li>
          <li className='sidebarListItem'>MOVIES</li>
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fab fa-twitter-square'></i>
          <i className='sidebarIcon fab fa-facebook-square'></i>
          <i className='sidebarIcon fab fa-pinterest'></i>
          <i className='sidebarIcon fab fa-instagram-square'></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
