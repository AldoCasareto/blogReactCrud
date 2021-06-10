import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import './singlePost.css';
import { Context } from '../../context/Context';

const SinglePost = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const publicFolder = 'http://localhost:9000/images/';
  const { user } = useContext(Context);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [updated, setUpdated] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace('/');
    } catch (error) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        description,
      });
      setUpdated(false)
    } catch (error) {}
  };

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
    };

    getPost();
  }, [path]);
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        {post.photo && (
          <img
            className='singlePostImg'
            src={publicFolder + post.photo}
            alt=''
          />
        )}
        {updated ? (
          <input
            autoFocus
            type='text'
            value={title}
            className='singlePostTitleInput'
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className='singlePostTitle'>
            {title}
            {post.username === user.username && (
              <div className='singlePostEdit'>
                <i
                  className='singlePostIcon far fa-edit'
                  onClick={() => setUpdated(true)}
                ></i>
                <i
                  className='singlePostIcon far fa-trash-alt'
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            <Link className='link' to={`/?user=${post.username}`}>
              Author: {post.username}
            </Link>
          </span>
          <span className='singlePostDate'>
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updated ? (
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            className='singlePostDescInput'
            value={description}
            name=''
            id=''
            cols='30'
            rows='10'
          ></textarea>
        ) : (
          <p className='singlePostDesc'>{description}</p>
        )}
        {updated && (
          <button
            onClick={handleUpdate}
            className='singlePostButton'
            type='submit'
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
