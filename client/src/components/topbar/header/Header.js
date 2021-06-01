import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='headerTitle'>
        <span className='headerTitleSm'>React & NOT</span>
        <span className='headerTitleLg'>blog</span>
      </div>
      <img
        className='headerImg'
        src='https://justinkelefas.com/wp-content/uploads/2016/04/Sunrise-over-Juno-pier.jpg'
        alt='headerImg'
      />
    </div>
  );
};

export default Header;
