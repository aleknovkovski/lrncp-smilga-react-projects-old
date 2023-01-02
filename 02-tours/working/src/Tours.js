import React from 'react';
import Tour from './Tour';

const Tours = (props) => {
  const tourItems = props.tours.map((tour)=> {
    return <Tour key={tour.id} tourData={tour} removeHandler={props.removeHandler}/>
  });

if(props.tours.length) {
  return (
      <div>
        {tourItems}
      </div>
  )
} else {
  return (
      <div className='title'>
        <h1>No Tours Left</h1>
        <button className='btn'>refresh</button>
      </div>
  )
}
};

export default Tours;
