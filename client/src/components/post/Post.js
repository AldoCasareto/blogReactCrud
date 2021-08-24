import React from 'react';
import './post.css';

import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

const Post = ({ post }) => {
  const { title, description, photo, categories, _id, price, duration } = post;
  const publicFolder = 'http://localhost:9000/images/';
  console.log(post.ratings.stars);

  let starSum = 0;

  post.ratings.forEach((p) => (starSum += p.stars));

  let averageSum = starSum / post.ratings.length;
  console.log(averageSum);

  return (
    <div className='post'>
      {photo && <img className='postImg' src={publicFolder + photo} alt='' />}
      <div className='postInfo'>
        <div className='postCats'>
          {categories.map((category) => (
            <span className='postCat'>{category.name}</span>
          ))}
        </div>
        <Link to={`/post/${_id}`} className='link'>
          <span className='postTitle'>{title}</span>
        </Link>

        <hr />
        {/* <span className='postDate'>{format(createdAt)}</span> */}
      </div>
      <p className='postDesc'>{description}</p>
      <p>Cost: USD {price}</p>
      <p>Duration: {duration} min</p>
      <span>{post.ratings.length} reviews <ReactStars value={averageSum} edit={false}/> </span>
     
      {/* <span>{starSum / post.ratings.length}</span> */}
    </div>
  );
};

export default Post;
