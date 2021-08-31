import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import './modal.css';
import { Context } from '../../context/Context';

const ModalBook = ({ isOpen, setIsOpen, post, date }) => {
  const { user } = useContext(Context);
  const [confirmation, setConfirmation] = useState(false);
  const submitBooking = () => {
    setConfirmation(true);
    setTimeout(() => {
      setConfirmation(false);
    }, 5000);
    
  };
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
        <button className='submit' type='submit' onClick={submitBooking}>
          Confirm
        </button>
        {
          <p>
            {confirmation ? (
              <p>
                Thanks for your booking, you will receive a confirmation by
                email
              </p>
            ) : null}
          </p>
        }
      </Modal>
    </div>
  );
};

export default ModalBook;
