import React, { useEffect, useRef, useState } from 'react';
import { ImageAssets } from '../constants/imageassets';

const WaveSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  console.log('isVisible state:', isVisible);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Intersection observed:', entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="wave-section" ref={sectionRef}>
      <div className="container">
        <div className="wave-content">
          <h2>Where Does It Come From?</h2>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          </p>
          <div className='pill-img-container'  style={{ backgroundImage: `url(${ImageAssets.waveimg})`, height: '400px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="pills-container">
            <div className={`pill ${isVisible ? 'animate' : ''}`}>Lorem ipsum</div>
            <div className={`pill ${isVisible ? 'animate' : ''}`}>Dolor sit amet</div>
            <div className={`pill ${isVisible ? 'animate' : ''}`}>Consectetur</div>
            <div className={`pill ${isVisible ? 'animate' : ''}`}>Adipiscing elit</div>
            <div className={`pill ${isVisible ? 'animate' : ''}`}>Sed do eiusmod</div>
            <div className={`pill ${isVisible ? 'animate' : ''}`}>Tempor incididunt</div>
            <div className={`pill ${isVisible ? 'animate' : ''}`}>Ut labore</div>
            <div className={`pill ${isVisible ? 'animate' : ''}`}>Dolore magna</div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaveSection;
