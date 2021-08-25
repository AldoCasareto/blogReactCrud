import React, { useState, useEffect } from 'react';
import Header from '../../components/topbar/header/Header';
import Posts from '../../components/posts/Posts';
import SideBar from '../../components/sidebar/SideBar';
import './home.css';
import axios from 'axios';
import { useLocation } from 'react-router';
import Carousel from '../../components/Carousel/Carousel';
import SignIn from '../../components/Banner/SignIn/SignIn';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/posts/${search}`);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <div className="container d-flex flex-column rounded ">
        <Header />
        <SignIn />
        <Carousel />
        <SideBar />
        <Posts posts={posts} />
      </div>




    </>
  );
};

export default Home;
