import React from 'react';
import Tour from './Tour';

const Tours = (props) => {
  function removeTour(e) {
    const tourId = e.target.dataset.tourId
  }

  const tourItems = props.tours.map((tour)=> {
    return <Tour key={tour.id} tourData={tour} removeHandler={removeTour}/>
  });

  return (
      <div>
        {tourItems}
      </div>
  )
};

export default Tours;
