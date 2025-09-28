import React, { useState, useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import MolecularStructure from '../components/MolecularStructure';
import WaveSection from '../components/WaveSection';
import CardStack from '../components/CardStack';
import NeonCardsContainer from '../components/NeonCardsContainer';
import { COLORS } from '../constants/colors';
import { ImageAssets } from '../constants/imageassets';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showCards, setShowCards] = useState(false);
  const neonSectionRef = useRef(null);
  const neonContentRef = useRef(null);
  const neonImageRef = useRef(null);
  const circleSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Show cards earlier in the scroll (around 150px scroll)
      if (window.scrollY > 150) {
        setShowCards(true);
      } else {
        setShowCards(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP ScrollTrigger animation for neon section
  useEffect(() => {
    console.clear();
    
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = neonSectionRef.current;
    const heroSection = neonSectionRef.current?.querySelector('.section.hero');
    const image = neonImageRef.current;

    if (!wrapper || !heroSection || !image) return;

    // Set initial states - show combined component
    gsap.set(heroSection, { opacity: 1, scale: 1, width: "400px", height: "400px", borderRadius: "50%" });
    gsap.set(image, { opacity: 1, scale: 1, z: 0 });

    // Create the scroll trigger animation
    gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1,
        markers: true
      }
    })
    // First: Image scales up and moves forward
    .to(image, {
      scale: 2.5,
      z: 400,
      transformOrigin: "center center",
      ease: "power1.inOut",
      duration: 0.5
    })
    // Then: Content expands from circular to full width
    .to(heroSection, {
      width: "100%",
      height: "100%",
      borderRadius: "0%",
      transformOrigin: "center center",
      ease: "power1.inOut",
      duration: 0.4
    }, "-=0.3")
    // Finally: Image fades out and disappears while content remains
    .to(image, {
      opacity: 0,
      scale: 2.8,
      z: 500,
      transformOrigin: "center center",
      ease: "power1.inOut",
      duration: 0.4
    });

    // Cleanup function
    return () => {
      // Kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === wrapper) {
          trigger.kill();
        }
      });
    };
  }, []);

  // Circular text animation for circle section
  useEffect(() => {
    const circleSection = circleSectionRef.current;
    const circle = circleSection?.querySelector('.circle');
    const circleTexts = circleSection?.querySelectorAll('.circle-text');

    if (!circleSection || !circle || !circleTexts.length) return;

    // Set initial state - circle starts centered
    gsap.set(circle, {
      left: '50%', // Start centered
      transform: 'translate(-50%, -50%)'
    });

    // Hide all text initially
    gsap.set(circleTexts, {
      opacity: 0
    });

    const timelines = [];

    // Create circular animation for each text element
    const totalElements = circleTexts.length;
    const angleStep = 360 / totalElements; // Dynamic angle calculation based on total elements
    
    circleTexts.forEach((text, index) => {
      // Position text around the visible part of the circle (180 degrees)
      const startAngle = 0; // Top of circle
      const endAngle = 180; // Bottom of circle
      const angleRange = endAngle - startAngle;
      const angle = startAngle + (index * (angleRange / (totalElements - 1)));
      const radius = 48; // Position text just outside the circle edge
      
      // Store original styles to restore later
      const originalStyles = {
        position: text.style.position,
        left: text.style.left,
        top: text.style.top,
        transform: text.style.transform,
        transformOrigin: text.style.transformOrigin
      };

      // Set initial position around the circle perimeter - text stays straight
      gsap.set(text, {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transformOrigin: 'center center',
        x: Math.cos(angle * Math.PI / 180) * radius + 'vh',
        y: Math.sin(angle * Math.PI / 180) * radius + 'vh',
        rotation: 0, // Keep text straight, not rotated
        // transform: 'translate(-50%, -50%)'
      });

      // Create scroll-triggered rotation animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: circleSection,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            
            // Move circle from center to left smoothly (only for first text element)
            if (index === 0) {
              const circleProgress = Math.min(progress * 2, 1); // Move circle in first half of scroll
              const newLeft = 50 - (circleProgress * 70); // From 50% to -20%
              gsap.set(circle, {
                left: newLeft + '%',
                transform: 'translate(-50%, -50%)'
              });
            }
            
            // Show text only after circle fully reaches left position (progress > 0.7)
            if (progress > 0.7) {
              const textProgress = (progress - 0.7) / 0.3; // Text animation starts at 70% progress
              const rotation = textProgress * -180; // Rotation from bottom to top
              const currentAngle = (angle + rotation) * Math.PI / 180;
              
              gsap.set(text, {
                opacity: 1, // Show text
                x: Math.cos(currentAngle) * radius + 'vh',
                y: Math.sin(currentAngle) * radius + 'vh',
                rotation: currentAngle * 180 / Math.PI, // Rotate text to follow the circle curve
              });
            } else {
              // Keep text hidden until circle is fully at left
              gsap.set(text, {
                opacity: 0
              });
            }
          }
        }
      });

      timelines.push({ timeline: tl, element: text, originalStyles });
    });

    // Cleanup function
    return () => {
      timelines.forEach(({ timeline, element, originalStyles }) => {
        // Kill the timeline
        timeline.kill();
        
        // Restore original styles
        Object.keys(originalStyles).forEach(key => {
          element.style[key] = originalStyles[key];
        });
      });
    };
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "React SEO Website",
    "url": "https://yourwebsite.com",
    "description": "Modern React website with SEO optimization",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://yourwebsite.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const neonCardsData = [
    {
      title: "Lorem Ipsum",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry",
      color: COLORS.NEON_BRIGHT_GREEN,
      width: 308.9552254705535,
      height: 493.99999161783234,
      top: -45,
      left: 252,
      angle: 12,
      opacity: 1
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry",
      color: COLORS.NEON_LIME_GREEN,
      width: 308.9552254705535,
      height: 493.99999161783234,
      top: -45,
      left: 720,
      angle: -22,
      opacity: 1
    }
  ];

  return (
    <>
      <SEO
        title="Home"
        description="Welcome to our modern React website with advanced SEO optimization. Discover our services and learn more about our company."
        keywords="react, seo, website, modern, optimization"
        url="/"
        structuredData={structuredData}
      />
      
      {/* Hero Section with Neon Cards */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 
            className="hero-title-first"
            style={{
              fontSize: showCards ? '14rem' : Math.max(14, 20 - scrollY * 0.003) + 'rem',
              transform: `translateY(${scrollY * 0.2}px)`,
              transition: showCards ? 'font-size 2.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' : 'font-size 1.2s cubic-bezier(0.23, 1, 0.32, 1), transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
            }}
          >
            LOREM
          </h1>
          <h1 
            className="hero-title-second"
            style={{
              fontSize: showCards ? '12rem' : Math.max(12, 18 - scrollY * 0.003) + 'rem',
              transform: `translateY(${scrollY * 0.2}px)`,
              transition: showCards ? 'font-size 2.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' : 'font-size 1.2s cubic-bezier(0.23, 1, 0.32, 1), transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
            }}
          >
            IPSUM LORE
          </h1>
          
          <div className="latest-text">
            Latest celebrated
          </div>
          
          <div 
            className={`neon-cards ${showCards ? 'cards-visible' : 'cards-hidden'}`}
            style={{
              opacity: showCards ? 1 : 0,
              transform: showCards ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
              transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            <NeonCardsContainer cards={neonCardsData} />
          </div>
          
          {/* <MolecularStructure /> */}
        </div>
      </div>
      
      {/* Solid Neon Section with Scroll Animation */}
      <div className="wrapper" ref={neonSectionRef}>
        <div className="content" ref={neonContentRef}>
          <section className="section hero">
            <div className="container">
              <div className="title-group">
                <h2>Lorem.</h2>
                <h2>Ipsum.</h2>
                <h2>Lorem.</h2>
              </div>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </section>
        </div>
        <div className="image-container">
          <img 
            src={ImageAssets.circleimg} 
            alt="Circle Image"
            ref={neonImageRef}
          />
        </div>
      </div>

      {/* Next Section - Appears after animation */}
     
      
      {/* Circle Section */}
      <div className="circle-section" ref={circleSectionRef}>
        <div className="container">
          <div className="circle-container">
            <div className="circle"></div>
            <div className="circle-texts">
              <div className="circle-text">Lorem. Ipsum.</div>
              <div className="circle-text">Lorem. Ipsum.</div>
              <div className="circle-text">Lorem. Ipsum.</div>
              <div className="circle-text">Lorem. Ipsum.</div>
              <div className="circle-text">Lorem. Ipsum.</div>
              <div className="circle-text">Lorem. Ipsum.</div>
              <div className="circle-text">Lorem. Ipsum.</div>
              <div className="circle-text">Lorem. Ipsum.</div>
              <div className="circle-text">Lorem. Ipsum.</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Section */}
      <WaveSection />
      
      {/* Card Stack Section */}
      <CardStack />
    </>
  );
};

export default Home;
