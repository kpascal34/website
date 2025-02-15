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
      title: 'Professional Physical Security Solutions',
      subtitle: 'Your Trusted Security Partner',
      description: 'Comprehensive security services delivered by SIA licensed professionals in Yorkshire and Greater Manchester',
      cta: {
        primary: { text: 'Get Free Consultation', link: '/contact' },
        secondary: { text: 'View Services', link: '/#services' }
      }
    },
    {
      image: '/images/hero-2.jpg',
      title: 'Door Supervision & Manned Security',
      subtitle: 'Expert Protection Services',
      description: 'Professional door supervision and static guarding services for venues, events, and commercial properties',
      cta: {
        primary: { text: 'Discuss Your Needs', link: '/contact' },
        secondary: { text: 'Learn More', link: '/services/door-supervision' }
      }
    },
    {
      image: '/images/hero-3.jpg',
      title: 'Event Security & Risk Assessment',
      subtitle: 'Comprehensive Event Protection',
      description: 'Full-service event security and detailed risk assessments to ensure safety at every level',
      cta: {
        primary: { text: 'Plan Your Event', link: '/contact' },
        secondary: { text: 'Our Approach', link: '/services/event-security' }
      }
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
    }, 7000); // Increased duration for better readability

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
          <Link 
            to={slides[currentSlide].cta.primary.link} 
            className="cta-button primary"
            onClick={(e) => {
              if (slides[currentSlide].cta.primary.link.startsWith('/#')) {
                e.preventDefault();
                document.querySelector(slides[currentSlide].cta.primary.link.substring(1))?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {slides[currentSlide].cta.primary.text}
          </Link>
          <Link 
            to={slides[currentSlide].cta.secondary.link}
            className="cta-button secondary"
            onClick={(e) => {
              if (slides[currentSlide].cta.secondary.link.startsWith('/#')) {
                e.preventDefault();
                document.querySelector(slides[currentSlide].cta.secondary.link.substring(1))?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {slides[currentSlide].cta.secondary.text}
          </Link>
        </div>

        <div className="hero-social-links">
          <a href="https://www.facebook.com/Fortissecured" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/company/fortis-security-group" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/fortis_security_/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
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