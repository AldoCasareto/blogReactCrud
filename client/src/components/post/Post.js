import React from 'react';
import './post.css';

const Post = ({ post }) => {
  const { title, createdAt } = post;
  console.log(post);
  return (
    <div className='post'>
      <img
        className='postImg'
        src='https://justinkelefas.com/wp-content/uploads/2020/10/Sea-Turtle-swimming-in-Clear-Water.jpg'
        alt=''
      />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>{title}</span>
        <hr />
        <span className='postDate'>{createdAt}</span>
      </div>
      <p className='postDesc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ducimus
        labore optio qui facere cupiditate exercitationem vel ipsum fugit
        blanditiis totam, nostrum, amet nihil? Sed, quod fuga ullam
        reprehenderit alias qui eius rem ipsa, voluptatum ipsum, delectus
        laudantium cumque deleniti?
      </p>
    </div>
  );
};

export default Post;
