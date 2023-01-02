import React, {useState} from 'react';
import people from './data';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';

const Review = (props) => {
    return (
        <section className='container'>
            <div className='title'>
                <h2>our reviews</h2>
                <div className='underline'></div>
            </div>
            <article className='review'>
                <div className='img-container'>
                    <img src={props.data.image} alt="" className='person-img'/>
                </div>
                <h4 className='author'>{props.data.name}</h4>
            </article>
        </section>
    );
};

export default Review;
