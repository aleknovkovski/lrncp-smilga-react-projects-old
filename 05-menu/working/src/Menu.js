import React from 'react';

const Menu = ({items}) => {
  return (<div className="section-center">
    {
      items.map((item)=> {
        return <div>{item.title}</div>
      })
    }
  </div>);
};

export default Menu;
