import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { scrollToSection, scrollToTop } from './utils/scrollUtils';
import './App.css';
import './styles/ServicePages.css';
import Home from './pages/Home';
import DoorSupervision from './pages/DoorSupervision';
import MannedSecurity from './pages/MannedSecurity';
import EventSecurity from './pages/EventSecurity';
import RiskAssessment from './pages/RiskAssessment';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import FloatingContact from './components/FloatingContact/FloatingContact';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

interface FormData {
  name: string;
  email: string;
  phone_number: string;
  message: string;
}

const TOTAL_SLIDES = 3;

// Add fallback gradients
const FALLBACK_GRADIENTS = {
  1: 'linear-gradient(45deg, #000000, #1a1a1a)',
  2: 'linear-gradient(135deg, #1a1a1a, #333333)',
  3: 'linear-gradient(225deg, #333333, #000000)'
};

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Wait for the DOM to be ready
      setTimeout(() => {
        scrollToSection(location.hash);
      }, 0);
    }
  }, [location]);

  return null;
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone_number: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [loadedImages, setLoadedImages] = useState<number[]>([1, 2, 3]);
  const [isLoading, setIsLoading] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [currentTestimonialPage, setCurrentTestimonialPage] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  useEffect(() => {
    // Skip image loading for now
    setIsLoading(false);
  }, []);

  // Keep the auto-sliding effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(current => (current % TOTAL_SLIDES) + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (hasAcceptedCookies) {
      setShowCookieBanner(false);
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkTheme(savedTheme === 'dark');
    }
  }, []);

  // Add auto-scroll effect for testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialPage(current => (current === 0 ? 1 : 0));
      const testimonialGrid = document.querySelector('.testimonial-grid');
      if (testimonialGrid) {
        testimonialGrid.scrollLeft = currentTestimonialPage === 0 ? testimonialGrid.clientWidth : 0;
      }
    }, 20000); // 20 seconds

    return () => clearInterval(timer);
  }, [currentTestimonialPage]);

  const validateForm = () => {
    const errors: Partial<FormData> = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phone_number.trim()) errors.phone_number = 'Phone number is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof FormData]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormStatus('submitting');
    
    try {
      // Initialize EmailJS with your public key
      await emailjs.init("L_WED7EtdpQ51lFN2");

      const result = await emailjs.send(
        "service_s40muhp",  // Your EmailJS service ID
        "template_pyx1via", // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.phone_number,
          message: formData.message,
          to_name: "Fortis Secured",
        },
        "L_WED7EtdpQ51lFN2" // Your EmailJS public key
      );

      if (result.text === 'OK') {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone_number: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Email send error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  const handleCookieConsent = (accepted: boolean) => {
    if (accepted) {
      localStorage.setItem('cookiesAccepted', 'true');
    }
    setShowCookieBanner(false);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem('theme', !isDarkTheme ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', !isDarkTheme ? 'dark' : 'light');
  };

  // Update hero background styles dynamically
  const getSlideStyle = (slideNumber: number): React.CSSProperties => {
    if (imageErrors[slideNumber]) {
      return {
        backgroundImage: FALLBACK_GRADIENTS[slideNumber as keyof typeof FALLBACK_GRADIENTS],
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };
    }

    const imagePath = slideNumber === 1 ? '/images/hero.jpg' : `/images/hero-${slideNumber}.jpg`;
    
    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${imagePath}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: loadedImages.includes(slideNumber) ? 1 : 0,
      transition: 'opacity 0.5s ease-in-out'
    };
  };

  // Update image preloading with error handling
  useEffect(() => {
    setIsLoading(true);
    const loadImages = async () => {
      try {
        const imagePromises = [1, 2, 3].map(num => {
          return new Promise<number>((resolve, reject) => {
            const img = new Image();
            const imagePath = num === 1 ? '/images/hero.jpg' : `/images/hero-${num}.jpg`;
            img.src = imagePath;
            
            img.onload = () => {
              setImageErrors(prev => ({ ...prev, [num]: false }));
              resolve(num);
            };
            
            img.onerror = () => {
              console.error(`Failed to load image: ${imagePath}`);
              setImageErrors(prev => ({ ...prev, [num]: true }));
              reject(new Error(`Failed to load image ${num}`));
            };
          });
        });

        const results = await Promise.allSettled(imagePromises);
        const loadedNums = results
          .filter((result): result is PromiseFulfilledResult<number> => result.status === 'fulfilled')
          .map(result => result.value);
        
        setLoadedImages(loadedNums);
      } catch (error) {
        console.error('Failed to load images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  const handleTestimonialPageChange = (pageIndex: number) => {
    const testimonialGrid = document.querySelector('.testimonial-grid');
    if (testimonialGrid) {
      testimonialGrid.scrollLeft = pageIndex * testimonialGrid.clientWidth;
      setCurrentTestimonialPage(pageIndex);
    }
  };

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (path === '/') {
      window.location.hash = '/';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path.startsWith('/#')) {
      const sectionId = path.split('#')[1];
      // If we're not on the homepage, go there first
      if (window.location.hash !== '' && window.location.hash !== '#/') {
        window.location.hash = '/';
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      } else {
        // We're already on homepage, just scroll
        scrollToSection(sectionId);
      }
    } else {
      window.location.hash = path;
    }
  };

  return (
    <Router>
      <div className={`App ${isDarkTheme ? 'dark' : 'light'}`}>
        <ThemeToggle />
        <ScrollHandler />
        <nav className="navbar">
          <div className="logo">
            <Link to="/" onClick={(e) => handleNavigation(e, '/')}>
              <img 
                src="/images/logo.png" 
                alt="Fortis Security" 
                onLoad={() => setIsLogoLoaded(true)}
                onError={() => setLogoError(true)}
                style={{ opacity: isLogoLoaded ? 1 : 0 }}
              />
            </Link>
          </div>
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={(e) => handleNavigation(e, '/')}>HOME</Link>
            <Link to="/#about" onClick={(e) => handleNavigation(e, '/#about')}>ABOUT</Link>
            <Link to="/#services" onClick={(e) => handleNavigation(e, '/#services')}>SERVICES</Link>
            <Link to="/#contact" onClick={(e) => handleNavigation(e, '/#contact')}>CONTACT</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            <Home
              currentSlide={currentSlide}
              isLoading={isLoading}
              loadedImages={loadedImages}
              visibleSections={visibleSections}
              currentTestimonialPage={currentTestimonialPage}
              handleTestimonialPageChange={handleTestimonialPageChange}
              getSlideStyle={getSlideStyle}
              formData={formData}
              formErrors={formErrors}
              formStatus={formStatus}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              scrollToSection={scrollToSection}
            />
          } />
          <Route path="/services/door-supervision" element={<DoorSupervision />} />
          <Route path="/services/manned-security" element={<MannedSecurity />} />
          <Route path="/services/event-security" element={<EventSecurity />} />
          <Route path="/services/risk-assessment" element={<RiskAssessment />} />
          <Route path="/contact" element={
            <Contact
              formData={formData}
              formErrors={formErrors}
              formStatus={formStatus}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          } />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>

        <FloatingContact />
        
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/" onClick={(e) => handleNavigation(e, '/')}>Home</Link></li>
                <li><Link to="/#about" onClick={(e) => handleNavigation(e, '/#about')}>About Us</Link></li>
                <li><Link to="/#services" onClick={(e) => handleNavigation(e, '/#services')}>Our Services</Link></li>
                <li><Link to="/#contact" onClick={(e) => handleNavigation(e, '/#contact')}>Contact</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                <li><Link to="/services/door-supervision" onClick={(e) => handleNavigation(e, '/services/door-supervision')}>Door Supervision</Link></li>
                <li><Link to="/services/manned-security" onClick={(e) => handleNavigation(e, '/services/manned-security')}>Manned Security</Link></li>
                <li><Link to="/services/event-security" onClick={(e) => handleNavigation(e, '/services/event-security')}>Event Security</Link></li>
                <li><Link to="/services/risk-assessment" onClick={(e) => handleNavigation(e, '/services/risk-assessment')}>Risk Assessment</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="https://www.facebook.com/Fortissecured" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/fortis-security-group" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/fortis_security_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Fortis Secured. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy" onClick={(e) => handleNavigation(e, '/privacy')}>Privacy Policy</Link>
              <Link to="/terms" onClick={(e) => handleNavigation(e, '/terms')}>Terms of Service</Link>
              <Link to="/cookies" onClick={(e) => handleNavigation(e, '/cookies')}>Cookie Policy</Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;