import React from 'react';
import './write.css';

const Write = () => {
  return (
    <div className='writeImg'>
        <img src="" alt="" />
      <form className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon far fa-plus-square'></i>
          </label>
          <input type='file' id='fileInput' style={{ display: 'none' }} />
          <input
            type='text'
            placeholder='Title'
            className='writeInput'
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
            <textarea placeholder='write your story' type='text' className='writeInput writeText' ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
