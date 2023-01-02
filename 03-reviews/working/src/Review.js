import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = (props) => {
  return <h2>{props.data.name}</h2>;
};

export default Review;
