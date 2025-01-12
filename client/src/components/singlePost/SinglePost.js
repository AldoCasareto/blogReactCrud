import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
/* import './singlePost.css'; */
import { Context } from '../../context/Context';
import Ratings from '../ratings/Ratings';
import ModalBook from '../modal/ModalBook'

const SinglePost = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const publicFolder = 'http://localhost:9000/images/';
  const { user } = useContext(Context);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [updated, setUpdated] = useState(false);
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [isOpen, setIsOpen] = useState(false)

  const date = new Date(post.selectedDate);


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
        price,
        duration,
      });
      setUpdated(false);
    } catch (error) {}
  };

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
      setPrice(res.data.price);
      setDuration(res.data.duration);
    };

    getPost();
  }, [path]);
  return (
    <div className='singlePost container rounded d-flex flex-column'>
      <div className='singlePostWrapper '>
        {post.photo && (
          <img
            className='w-50 h-25 singlePostImg'
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
              Instructor: {post.username}
            </Link>
            <p>short bio: {post.bio}</p>
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
            cols='20'
            rows='10'
          ></textarea>
        ) : (
          <>
            <h4>Course Description</h4>
            <p className='singlePostDesc'> {description}</p>
            <div className='d-flex justify-content-evenly'>
              <div className='d-flex flex-column'>
                <h4>Cost </h4>
                <span> € {post.price}</span>
              </div>
              <div className='d-flex flex-column'>
                <h4>Duration: </h4>
                <span>{post.duration} min </span>
              </div>
              <div className='d-flex flex-column'>
                <h4>When?</h4>
                <span>
                  {date.toDateString()} {date.getHours()}:{date.getMinutes()}
                </span>
              </div>

              {/* offline data */}
              <p>
                Course Format :{' '}
                {post.format === 'inPerson' ? 'In Person' : 'Online'}
              </p>
              {post.format === 'inPerson' && (
                <div>
                  <p>{post.address}</p>
                  <p>{post.areaCode}</p>
                  <p>{post.city}</p>
                  <p>{post.placeOfInterest}</p>
                </div>
              )}
            </div>
          </>
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
      <ModalBook date={date} isOpen={isOpen} setIsOpen={setIsOpen} post={post} />
      {/* <Modal isOpen={isOpen} onRequestCall={() => setIsOpen(false)}>
        <h1>Booking</h1>
        <p>yes!</p>
      </Modal> */}
      <button type='submit' onClick={() => setIsOpen(true)} className='submit'>
        Book
      </button>
      <Ratings id={post._id} />
    </div>
  );
};

export default SinglePost;
