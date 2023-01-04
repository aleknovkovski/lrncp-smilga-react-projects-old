import React from 'react';

const Categories = ({handleClick}) => {
  return (<div className='btn-container' onClick={handleClick}>
        <button className="filter-btn">all</button>
        <button className="filter-btn">breakfast</button>
        <button className="filter-btn">lunch</button>
        <button className="filter-btn">shakes</button>
  </div>);
};

export default Categories;
