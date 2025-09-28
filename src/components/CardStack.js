import React, { useEffect, useRef } from 'react';

const CardStack = () => {
  const stackCardsRef = useRef(null);

  useEffect(() => {
    const stackCards = stackCardsRef.current;
    if (!stackCards) return;

    const items = stackCards.querySelectorAll('.js-stack-cards__item');
    const marginY = 64; // 4em = 64px
    const cardHeight = 400;
    const cardTop = 64; // --space-sm

    let scrollingFn = null;
    let scrolling = false;

    const setStackCards = () => {
      stackCards.style.paddingBottom = `${marginY * (items.length - 1)}px`;
      
      items.forEach((item, i) => {
        item.style.transform = `translateY(${marginY * i}px)`;
      });
    };

    const animateStackCards = () => {
      if (scrolling) return;
      scrolling = true;
      
      requestAnimationFrame(() => {
        const top = stackCards.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const elementHeight = stackCards.offsetHeight;

        if (cardTop - top + windowHeight - elementHeight - cardHeight + marginY + marginY * items.length > 0) {
          scrolling = false;
          return;
        }

        items.forEach((item, i) => {
          const scrollPos = cardTop - top - i * (cardHeight + marginY);
          if (scrollPos > 0) {
            const scaling = i === items.length - 1 ? 1 : (cardHeight - scrollPos * 0.05) / cardHeight;
            item.style.transform = `translateY(${marginY * i}px) scale(${scaling})`;
          } else {
            item.style.transform = `translateY(${marginY * i}px)`;
          }
        });

        scrolling = false;
      });
    };

    const stackCardsScrolling = () => {
      animateStackCards();
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (scrollingFn) return;
        scrollingFn = stackCardsScrolling;
        window.addEventListener('scroll', scrollingFn);
        setStackCards();
      } else {
        if (!scrollingFn) return;
        window.removeEventListener('scroll', scrollingFn);
        scrollingFn = null;
      }
    }, { threshold: [0, 1] });

    observer.observe(stackCards);

    return () => {
      if (scrollingFn) {
        window.removeEventListener('scroll', scrollingFn);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div className="cardstack-section">
      <div className="container">
        <h2>Where Can I Get Some?</h2>
        
        <div className="stacked-cards-container js-stack-cards" ref={stackCardsRef}>
          <div className='main-card-holder js-stack-cards__item'>
            <div className="card-container">
              <div className="card">
                <div className="card-header">
                  <h3>Lorem</h3>
                  <h3>Ipsum</h3>
                </div>  
                <div className='white-box-container'>
                  <div className='white-box'></div>
                  <div>
                    <div className='white-box-text'>
                      <h1>Where can I</h1> 
                      <h1> get some?</h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                  </div>
                </div>
                <div className='white-box-container-two'>
                  <div className='white-box-text-two'>
                    <p> Artists from across India were invited—each a specialist in their region's distinctive art form. They were asked to celebrate the sun through their unique visual language. The results were bold and intricate, curvy and straight, colorful and graceful—but above all, they were a joyful tribute to the sun.</p>
                  </div>
                  <div className='white-box-two'></div>
                </div>
              </div>
            </div>
          </div>

          <div className='main-card-holder js-stack-cards__item'>
            <div className="card-container">
              <div className="card">
                <div className="card-header">
                  <h3>Lorem</h3>
                  <h3>Ipsum</h3>
                </div>  
                <div className='white-box-container'>
                  <div className='white-box'></div>
                  <div>
                    <div className='white-box-text'>
                      <h1>Where can I</h1> 
                      <h1> get some?</h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                  </div>
                </div>
                <div className='white-box-container-two'>
                  <div className='white-box-text-two'>
                    <p> Artists from across India were invited—each a specialist in their region's distinctive art form. They were asked to celebrate the sun through their unique visual language. The results were bold and intricate, curvy and straight, colorful and graceful—but above all, they were a joyful tribute to the sun.</p>
                  </div>
                  <div className='white-box-two'></div>
                </div>
              </div>
            </div>
          </div>

          <div className='main-card-holder js-stack-cards__item'>
            <div className="card-container">
              <div className="card">
                <div className="card-header">
                  <h3>Lorem</h3>
                  <h3>Ipsum</h3>
                </div>  
                <div className='white-box-container'>
                  <div className='white-box'></div>
                  <div>
                    <div className='white-box-text'>
                      <h1>Where can I</h1> 
                      <h1> get some?</h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                  </div>
                </div>
                <div className='white-box-container-two'>
                  <div className='white-box-text-two'>
                    <p> Artists from across India were invited—each a specialist in their region's distinctive art form. They were asked to celebrate the sun through their unique visual language. The results were bold and intricate, curvy and straight, colorful and graceful—but above all, they were a joyful tribute to the sun.</p>
                  </div>
                  <div className='white-box-two'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStack;
