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
                <p className='job'>{props.data.job}</p>
                <p className='info'>{props.data.text}</p>
                <div className="button-container">
                    <button className="prev-btn" onClick={()=> props.handleChange('prev')}>
                        <FaChevronLeft/>
                    </button>
                    <button className="next-btn" onClick={()=> props.handleChange('next')}>
                        <FaChevronRight/>
                    </button>
                </div>
                <button className="random-btn" onClick={()=> props.handleChange('random')}>
                    surprise me
                </button>
            </article>
        </section>
    );
};

export default Review;
