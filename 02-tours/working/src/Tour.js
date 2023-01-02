import React, { useState } from 'react';

const Tour = (props) => {
  return (
      <article className="single-tour">
          <img src={props.tourData.image} alt={props.tourData.name}/>
          <div className="tour-info">
              <h4>{props.tourData.name}</h4>
              <p>{props.tourData.info}</p>
          </div>
      </article>
  );
};

export default Tour;
