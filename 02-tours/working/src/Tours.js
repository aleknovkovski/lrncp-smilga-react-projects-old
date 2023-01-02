import React from 'react';
import Tour from './Tour';

const Tours = (props) => {
  const tourItems = props.tours.map((tour)=> {
    return <Tour key={tour.id} tourData={tour} removeHandler={props.removeHandler}/>
  });

if(props.tours.length) {
  return (
    <section>
        <div className="title">
            <h2>our tours</h2>
            <div className="underline"></div>
        </div>
        <div>
            {tourItems}
        </div>
    </section>
  )
} else {
  return (
      <div className='title'>
        <h1>No Tours Left</h1>
        <button className='btn' onClick={props.refreshHandler}>refresh</button>
      </div>
  )
}
};

export default Tours;
