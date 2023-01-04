import React, {useState, useEffect} from 'react';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa';
import data from './data';

function App() {

    const slidesMarkup = (<>
        <article className="lastSlide"><p>aaa</p></article>
        <article className="activeSlide"><p>bbb</p></article>
        <article className="nextSlide"><p>ccc</p></article>
        <article className="nextSlide"><p>ddd</p></article>
    </>)

    return (
        <section className="section">
            <div className="title">
                <h2><span>/</span>reviews</h2>
            </div>
            <div className="section-center">
                {slidesMarkup}
                <button className="prev">{"<<"}</button>
                <button className="next">{">>"}</button>
            </div>
        </section>
    );
}

export default App;
