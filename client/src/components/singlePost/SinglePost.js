import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import './singlePost.css';

const SinglePost = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const path = location.pathname.split('/')[2];

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setPost(res.data);
    };

    getPost();
  }, [path]);
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        {post.photo && (
          <img className='singlePostImg' src={post.photo} alt='' />
        )}
        <h1 className='singlePostTitle'>
          {post.title}
          <div className='singlePostEdit'>
            <i className='singlePostIcon far fa-edit'></i>
            <i className='singlePostIcon far fa-trash-alt'></i>
          </div>
        </h1>
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
        <p className='singlePostDesc'>{post.description}</p>
      </div>
    </div>
  );
};

export default SinglePost;
