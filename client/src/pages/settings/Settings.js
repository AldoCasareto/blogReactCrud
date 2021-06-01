import React from 'react';
import SideBar from '../../components/sidebar/SideBar';
import './settings.css';

const Settings = () => {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update your account</span>
          <span className='settingsDeleteTitle'>Delete your account</span>
        </div>
        <form className='settingsForm'>
          <label htmlFor=''>Profile Picture</label>
          <div className='settingsPP'>
            <img src='' alt='' />
            <label htmlFor='fileInput'>
              <i className='settingsPPIcon far fa-user-circle'></i>
            </label>
            <input type='file' id='fileInput' style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type='text' placeholder='aldo' />
          <label>Email</label>
          <input type='email' placeholder='aldo@gmail.com' />
          <label>Password</label>
          <input type='password' />
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Settings;
