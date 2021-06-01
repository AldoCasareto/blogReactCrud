import React from 'react';
import './singlePost.css';

const SinglePost = () => {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img
          className='singlePostImg'
          src='https://cdn.pixabay.com/photo/2017/04/08/22/10/alpaca-2214504_960_720.jpg'
          alt=''
        />
        <h1 className='singlePostTitle'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          aliquid!
          <div className='singlePostEdit'>
            <i className='singlePostIcon far fa-edit'></i>
            <i className='singlePostIcon far fa-trash-alt'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>Author: Aldo</span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit ex
          consequatur minus quibusdam eius amet veritatis accusantium placeat ab
          id, odio distinctio voluptate corporis dolorem laudantium dolor
          laboriosam itaque ad quo perspiciatis quasi necessitatibus aliquid.
          Eveniet cupiditate facilis accusantium temporibus quisquam ea eius,
          quaerat voluptates unde minima exercitationem alias harum suscipit
          tempore ipsa quibusdam doloribus neque vitae. Ea harum ab cum
          doloremque nesciunt? Maxime iusto doloribus, tempora ipsum possimus
          blanditiis placeat ut inventore, consectetur, explicabo voluptas
          ducimus! Rerum porro dolor dolores? Aliquid, adipisci et. Esse
          laboriosam molestiae, omnis perferendis corporis in sapiente.
          Recusandae excepturi veniam tempore, totam dicta itaque minima.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
