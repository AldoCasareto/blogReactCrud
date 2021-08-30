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
    <div className='container sidebarItem d-flex align-items-center' >
      <h1 className='sidebarTitle'>CATEGORIES</h1>
      <div className="miniGrid text-center">
        {categories.map((category) => (


          <Link className='link' to={`/?cat=${category.name}`}>
            {category.name}
          </Link>


        ))}
      </div>

    </div>
  );
};

export default SideBar;
