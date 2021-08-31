import React from 'react';
import './post.css';

import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

const Post = ({ post }) => {
  const { title, description, photo, categories, _id, price, duration } = post;
  const publicFolder = 'http://localhost:9000/images/';


  let starSum = 0;

  post.ratings.forEach((p) => (starSum += p.stars));

  let averageSum = starSum / post.ratings.length;


  return (
    <div className='  rounded  d-flex justify-content-around  post'>
      {photo && <img className='align-self-center    rounded imgTransform' src={publicFolder + photo} alt='' />}

      <div className="cardBody">
        <h3 className='postTitle text-center'>{title}</h3>

        <div className="d-flex justify-content-evenly">
          <h6 className="cardText"> Cost: USD {price}</h6>
          <h6 className="cardText">Duration: {duration} min</h6>
        </div>
        <h6 className='hostDesc cardText'>{description}</h6>

        <div className="d-flex flex-column align-self-center align-content-center starPull ">
          {post.ratings.length > 0
            ? `${post.ratings.length} reviews`
            : 'No reviews yet!'}
          <ReactStars value={averageSum} edit={false} isHalf={true} />

        </div>
        <Link className="btnIcon  " to={`/post/${_id}`} >
          <i class="far fa-hand-point-right"></i>
        </Link>

      </div>

    </div>

  );
};

export default Post;
