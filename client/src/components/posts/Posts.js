import React, { useState } from 'react';
import Post from '../post/Post';
import './posts.css';

const Posts = ({ posts }) => {
  const [searchCard, setSearchCard] = useState('');

  const matchCard =
    searchCard === ''
      ? posts
      : posts.filter((p) =>
          p.title.toLowerCase().includes(searchCard.toLowerCase())
        );

        console.log('match', matchCard);

  const handleSearch = (e) => {
    setSearchCard(e.target.value);
  };

  return (
    <>
      <input type='text' onChange={handleSearch} placeholder='search course' />
      <div className='posts '>
        {matchCard.map((p) => (
          <Post post={p} />
        ))}
      </div>
    </>
  );
};

export default Posts;
