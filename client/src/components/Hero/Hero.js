import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
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

        <div className="cta-group">
          <Link to="/contact" className="cta-button primary">
            Get Free Consultation
          </Link>
          <Link to="/services" className="cta-button secondary">
            Our Services
          </Link>
        </div>

        <div className="hero-social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
            <FaFacebookF />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
            <FaInstagram />
          </a>
        </div>

        <div className="slide-indicators" role="tablist">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slide-indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => handleSlideClick(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={currentSlide === index}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero; 