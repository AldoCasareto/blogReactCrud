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
    <div className=' w-100 rounded  d-flex justify-content-evenly bg-light post'>
      {photo && <img className='align-self-center  w-50 h-75  rounded imgTransform' src={publicFolder + photo} alt='' />}
      {/* <div className='postInfo'>
        <div className='postCats'>
          {categories.map((category) => (
            <span className='postCat'>{category.name}
            </span>
          ))}
        </div>

      </div> */}
      <div className="d-flex flex-column text-center  w-75 align-self-center">
        <h3 className='postTitle '>{title}</h3>

        <div className="d-flex justify-content-evenly">
          <h6 className="cardText"> Cost: USD {price}</h6>
          <h6 className="cardText">Duration: {duration} min</h6>
        </div>
        <h6 className='hostDesc cardText'>{description}</h6>
        <Link className="btnIcon align-self-end" to={`/post/${_id}`} >
          <i class="far fa-hand-point-right"></i>
        </Link>
      </div>
      <span>
        {post.ratings.length > 0
          ? `${post.ratings.length} reviews`
          : 'No reviews yet!'}
        <ReactStars value={averageSum} edit={false} isHalf={true} />
      </span>
    </div>

  );
};

export default Post;
