import React from 'react';

const Categories = ({handleClick, categories}) => {


  return (<div className='btn-container' onClick={handleClick}>
    {
      categories.map((category, index)=> {
        return <button className="filter-btn" data-category={category} key={index}>
          {category}
        </button>
      })
    }
  </div>);
};

export default Categories;
