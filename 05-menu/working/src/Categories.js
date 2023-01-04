import React from 'react';

const Categories = ({handleClick, categories}) => {


  return (<div className='btn-container' onClick={handleClick}>
    {
      categories.map((category)=> {
        return <button className="filter-btn" data-category={category}>
          {category}
        </button>
      })
    }
  </div>);
};

export default Categories;