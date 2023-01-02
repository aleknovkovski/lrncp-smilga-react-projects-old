import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = (props) => {
  return (
      <section className='container'>
        <article className='review'>
            <h2>{props.data.name}</h2>
        </article>
      </section>
  );
};

export default Review;
