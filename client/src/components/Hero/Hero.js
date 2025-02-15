import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState([]);

  const slides = [
    {
      image: '/images/hero.jpg',
      title: 'Professional Security Solutions',
      subtitle: 'Protecting What Matters Most',
      description: 'Expert security services in Yorkshire and Greater Manchester'
    },
    {
      image: '/images/hero-2.jpg',
      title: 'Comprehensive Protection',
      subtitle: 'SIA Licensed Security Personnel',
      description: 'Door supervision, manned security, and event protection'
    },
    {
      image: '/images/hero-3.jpg',
      title: 'Risk Assessment Services',
      subtitle: 'Proactive Security Planning',
      description: 'Custom security solutions for your business'
    }
  ];

  useEffect(() => {
    // Preload images
    slides.forEach((slide, index) => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () => {
        setLoadedImages(prev => [...prev, index]);
        if (index === 0) setIsLoading(false);
      };
    });

    // Auto-advance slides
    const interval = setInterval(() => {
      setCurrentSlide(current => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSlideClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      className={`hero ${isLoading ? 'loading' : ''}`}
      role="banner"
      aria-label="Main banner"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-background slide-${index + 1} ${
            currentSlide === index ? 'active' : ''
          } ${loadedImages.includes(index) ? 'loaded' : ''}`}
          aria-hidden={currentSlide !== index}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="hero-image"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      <div className="hero-overlay" aria-hidden="true"></div>

      <div className="hero-content" role="region" aria-label="Hero content">
        <div className="hero-logo" aria-label="Company logo">
          <img src="/images/logo.png" alt="Fortis Secured Logo" width="120" height="120" />
          <h1>Fortis Secured</h1>
        </div>

        <div className="slide-content" aria-live="polite">
          <h2>{slides[currentSlide].title}</h2>
          <h3>{slides[currentSlide].subtitle}</h3>
          <p>{slides[currentSlide].description}</p>
        </div>

        <div className="cta-group" role="group" aria-label="Call to action buttons">
          <Link
            to="/#contact"
            className="cta-button primary"
            role="button"
            aria-label="Get a free consultation"
          >
            Get Free Consultation
          </Link>
          <Link
            to="/#services"
            className="cta-button secondary"
            role="button"
            aria-label="View our services"
          >
            Our Services
          </Link>
        </div>

        <div className="hero-social-links" role="navigation" aria-label="Social media links">
          <a
            href="https://www.facebook.com/Fortissecured"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
          >
            <span className="sr-only">Facebook</span>
            <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/fortis-security-group"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our LinkedIn page"
          >
            <span className="sr-only">LinkedIn</span>
            <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/fortis_security_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram page"
          >
            <span className="sr-only">Instagram</span>
            <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="slide-indicators" role="navigation" aria-label="Slide indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slide-indicator ${currentSlide === index ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index}
            onClick={() => handleSlideClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero; 