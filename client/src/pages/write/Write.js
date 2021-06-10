import React, { useContext, useState } from 'react';
import './write.css';
import axios from 'axios';
import { Context } from '../../context/Context';

const Write = () => {
  const { user } = useContext(Context);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handlePost = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;

      try {
        await axios.post('/upload', data);
      } catch (error) {}
    }
    try {
      const res = await axios.post('/posts', newPost);
      window.location.replace(`/post/${res.data._id}`);
    } catch (error) {}
  };

  return (
    <div className='write'>
      {file && (
        <img className='writeImg' src={URL.createObjectURL(file)} alt='' />
      )}

      <form className='writeForm' onSubmit={handlePost}>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon far fa-plus-square'></i>
          </label>
          <input
            type='file'
            id='fileInput'
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            onChange={(e) => setTitle(e.target.value)}
            type='text'
            placeholder='Title'
            className='writeInput'
            autoFocus={true}
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder='write your story'
            type='text'
            className='writeInput writeText'
          ></textarea>
        </div>
        <button type='submit' className='writeSubmit'>
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
