import React, { useContext } from 'react';
import Modal from 'react-modal';
import './modal.css';
import { Context } from '../../context/Context';

const ModalBook = ({ isOpen, setIsOpen, post, date }) => {
  const { user } = useContext(Context);
  console.log(user);
  console.log(post);

  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <h1>Booking Confirmation</h1>
        <h2>Course title: {post.title}</h2>
        <h3>Price: € {post.price}</h3>
        <h3>
          Date: {date.toDateString()} at {date.getHours()}:{date.getMinutes()}
        </h3>
        <h3>Kid's name: {user.kidName}</h3>
        <h3>Kid's age: {user.kidAge}</h3>
        {/* <p>{post.</p> */}
        <button className='submit'>Confirm</button>
      </Modal>
    </div>
  );
};

export default ModalBook;
