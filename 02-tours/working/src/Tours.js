import React from 'react';
import Tour from './Tour';
const Tours = (props) => {
  const tourLiItems = props.tours.map((tour)=> {
    return <li key={tour.id}>{tour.name}</li>
  });

  return (
      <ul>
        {tourLiItems}
      </ul>
  )
};

export default Tours;
