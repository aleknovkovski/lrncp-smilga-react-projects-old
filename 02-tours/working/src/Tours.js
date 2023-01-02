import React from 'react';
import Tour from './Tour';

const Tours = (props) => {
  const tourItems = props.tours.map((tour)=> {
    return <Tour key={tour.id} tourData={tour} removeHandler={props.removeHandler}/>
  });

  return (
      <div>
        {tourItems}
      </div>
  )
};

export default Tours;
