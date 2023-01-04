import React from 'react';

const Categories = ({handleClick, categories}) => {
  const categoriesMarkup = categories.map((category)=> {
    return <button className="filter-btn">{category}</button>
  })

  return (<div className='btn-container' onClick={handleClick}>
    <button className="filter-btn">all</button>
    {categoriesMarkup}
  </div>);
};

export default Categories;
