import React, { useState } from 'react';

const Tour = (props) => {
  return (
      <article className="single-tour">
          <img src={props.tourData.image} alt={props.tourData.name}/>
          <footer>
              <div className="tour-info">
                  <h4>{props.tourData.name}</h4>
              </div>
              <p>{props.tourData.info}</p>
          </footer>
      </article>
  );
};

export default Tour;
