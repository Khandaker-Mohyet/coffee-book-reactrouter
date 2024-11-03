import React from 'react';
import { NavLink } from 'react-router-dom';

const Catagories = ({categories}) => {
  return (
    <div role="tablist" className="tabs tabs-lifted">
      {
        categories.map(
          category => (<NavLink
            key={category.category}
            to={`/category/${category.category}`}
            role="tab"
            className={({isActive})=> `tab text-2xl font-bold mb-5 ${isActive? 'tab-active' : ''}`}>
            {category.category}</NavLink>))
      }
       
      </div>
  );
};

export default Catagories;