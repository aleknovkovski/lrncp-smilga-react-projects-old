import React, {useState, useEffect} from 'react';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa';
import data from './data';

function App() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slidesMarkup = (data.map((slide, index)=> {
        let classNow = ""
        if (index === currentSlide) {
            classNow = "activeSlide"
        } else if((index === currentSlide -1) || index === data.length -1 && currentSlide === 0) {
            classNow = "lastSlide"
        } else {
            classNow = "nextSlide"
        }

        return (
            <article className={classNow}>
                <img src={slide.image} alt={slide.name} className="person-img"/>
                <h4>{slide.name}</h4>
                <p className="title">{slide.title}</p>
                <p className="text">{slide.quote}</p>
            </article>
        )
    }))

    function changeSlide(direction) {
        if(direction === 'forward') {
            if(currentSlide===data.length-1) {
                setCurrentSlide(0)
            } else {
                setCurrentSlide((currentSlide)=> currentSlide+1)
            }
        }

        if(direction === 'backward') {
            if(currentSlide===0) {
                setCurrentSlide(data.length-1)
            } else {
                setCurrentSlide((currentSlide)=> currentSlide-1)
            }
        }
    }

    useEffect(()=> {
        const timeout = setTimeout(()=>{
            changeSlide('forward')
        },1000)

        return () => clearTimeout(timeout);
    })

    return (
        <section className="section">
            <div className="title">
                <h2><span>/</span>reviews</h2>
            </div>
            <div className="section-center">
                {slidesMarkup}
                <button className="prev" onClick={()=> changeSlide('backward')}>
                    <FiChevronLeft />
                </button>
                <button className="next" onClick={()=> changeSlide('forward')}>
                    <FiChevronRight />
                </button>
            </div>
        </section>
    );
}

export default App;
