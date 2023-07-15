import React, { useEffect, useState } from 'react'
import './Carousel.css'

export default function Carousel() {
    const [slide, setSlide] = useState('first')

    useEffect(() => {
        const slides = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth'];

        const interval = setInterval(() => {
            const currentIndex = slides.indexOf(slide);
            const nextIndex = (currentIndex + 1) % slides.length;
            setSlide(slides[nextIndex]);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [slide]);

  return (
    <div className='carousel'>
        <div className={slide}></div>
    </div>
  )
}
