import React, { useState } from 'react';

const Tour = (props) => {
  return (
      <article className="single-tour">
        <div className="tour-info">
          <h4>{props.tourData.name}</h4>
        </div>
      </article>
  );
};

export default Tour;
