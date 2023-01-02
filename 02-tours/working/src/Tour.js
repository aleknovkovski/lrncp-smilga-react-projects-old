import React, { useState } from 'react';
function removeTour(e) {
    const tourId = e.target.dataset.tourId
}

const Tour = (props) => {
  return (
      <article className="single-tour">
          <img src={props.tourData.image} alt={props.tourData.name}/>
          <footer>
              <div className="tour-info">
                  <h4>{props.tourData.name}</h4>
              </div>
              <p>{props.tourData.info}</p>
              <button
                  onClick={removeTour}
                  data-tour-id={props.tourData.id}
                  className="delete-btn">
                  not interested
              </button>
          </footer>
      </article>
  );
};

export default Tour;
