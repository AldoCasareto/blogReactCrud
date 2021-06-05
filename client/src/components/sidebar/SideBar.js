import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const SideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get('/categories');
      console.log(res);
      setCategories(res.data);
    };
    fetchCategories();
  }, []);
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img
          src='https://www.cwazores.com/Images/swd_george_karbus_02.jpg'
          alt=''
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vitae
          cumque fuga repellat. Excepturi laboriosam suscipit deleniti illo qui,
          labore voluptatum at!
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        {categories.map((category) => (
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <Link className='link' to={`/?cat=${category.name}`}>
                {category.name}
              </Link>
            </li>
          </ul>
        ))}
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fab fa-twitter-square'></i>
          <i className='sidebarIcon fab fa-facebook-square'></i>
          <i className='sidebarIcon fab fa-pinterest'></i>
          <i className='sidebarIcon fab fa-instagram-square'></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
