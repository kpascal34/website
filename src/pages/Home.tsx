import React from 'react';
import { Link } from 'react-router-dom';

interface HomeProps {
  currentSlide: number;
  isLoading: boolean;
  loadedImages: number[];
  visibleSections: string[];
  currentTestimonialPage: number;
  handleTestimonialPageChange: (pageIndex: number) => void;
  getSlideStyle: (slideNumber: number) => React.CSSProperties;
  formData: {
    name: string;
    email: string;
    phone_number: string;
    message: string;
  };
  formErrors: Partial<{
    name: string;
    email: string;
    phone_number: string;
    message: string;
  }>;
  formStatus: 'idle' | 'submitting' | 'success' | 'error';
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const Home: React.FC<HomeProps> = ({
  currentSlide,
  isLoading,
  loadedImages,
  visibleSections,
  currentTestimonialPage,
  handleTestimonialPageChange,
  getSlideStyle,
  formData,
  formErrors,
  formStatus,
  handleInputChange,
  handleSubmit
}) => {
  return (
    <main>
      <section id="hero" className={`hero ${isLoading ? 'loading' : ''}`}>
        <div 
          className={`hero-background ${loadedImages.includes(currentSlide) ? 'loaded' : ''}`} 
          style={getSlideStyle(currentSlide)}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-logo">
            <img 
              src="/images/logo.png" 
              alt="Fortis Security"
              style={{ opacity: loadedImages.length > 0 ? 1 : 0 }}
            />
          </div>
          <h1 className="animate-title">Professional Security Solutions</h1>
          <div className="social-links hero-social-links animate-fade-in">
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
          <div className="cta-group animate-fade-in">
            <a href="#services" className="cta-button secondary">Our Services</a>
          </div>
        </div>
        <div className="slide-indicators">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`slide-indicator ${currentSlide === num ? 'active' : ''}`}
            ></div>
          ))}
        </div>
      </section>

      <section id="about" className={`about ${visibleSections.includes('about') ? 'visible' : ''}`}>
        <div className="about-content">
          <h2>About Us</h2>
          <p>With years of dedicated experience in the security industry, we have earned our reputation as a leading security provider serving Yorkshire and Greater Manchester. Our team comprises highly trained professionals who understand the complexities of safety and protection in today's world.</p>
          <p>Our unwavering commitment to excellence and integrity sets us apart in this fiercely competitive market. Adequate security goes beyond merely responding to incidents; it involves building trust with our clients and fostering a secure environment for everyone.</p>
          <p>We aim to make a meaningful and positive transformation within the security sector. We prioritise fair wages for our staff, recognising that satisfied employees contribute to better service. Additionally, we are dedicated to safeguarding the welfare of our personnel and the customers we serve. By emphasising these values, we aim to reshape the landscape of security provision into one that is fairer, more caring, and genuinely focused on protection and trust.</p>
        </div>
      </section>

      <section id="services" className={`services ${visibleSections.includes('services') ? 'visible' : ''}`}>
        <h2>Our Services</h2>
        <p>Comprehensive security solutions tailored to your needs</p>
        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon">🚪</div>
            <h3>Door Supervision</h3>
            <p>Professional security personnel for venues and events, ensuring safe and controlled access.</p>
            <Link to="/services/door-supervision" className="learn-more">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          <div className="service-card">
            <div className="service-icon">👥</div>
            <h3>Manned Security</h3>
            <p>24/7 security presence with trained officers to protect your premises.</p>
            <Link to="/services/manned-security" className="learn-more">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          <div className="service-card">
            <div className="service-icon">🎪</div>
            <h3>Event Security</h3>
            <p>Comprehensive security solutions for events of all sizes.</p>
            <Link to="/services/event-security" className="learn-more">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          <div className="service-card">
            <div className="service-icon">📋</div>
            <h3>Risk Assessment</h3>
            <p>Expert evaluation of security risks and tailored protection strategies.</p>
            <Link to="/services/risk-assessment" className="learn-more">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section id="testimonials" className={`testimonials ${visibleSections.includes('testimonials') ? 'visible' : ''}`}>
        <h2>What Our Clients Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-page">
            <div className="testimonial-card">
              <div className="quote">"</div>
              <p>Michael is the best bouncer he really looked after me and my friends when we were drunk and made sure we didn't get into any trouble.</p>
              <div className="author">- Poppy</div>
            </div>
            <div className="testimonial-card">
              <div className="quote">"</div>
              <p>Love everything about the night, but mainly the staff, best staff I've ever met, big shout out to Kingsley for looking after me, most caring staff in Leeds.</p>
              <div className="author">- Paul</div>
            </div>
          </div>
          <div className="testimonial-page">
            <div className="testimonial-card">
              <div className="quote">"</div>
              <p>The door staff are always really good about handling things without being overly aggressive. They're really supportive when you need help.</p>
              <div className="author">- Morgan</div>
            </div>
            <div className="testimonial-card">
              <div className="quote">"</div>
              <p>Professional and reliable service. The team is always punctual and handles situations with expertise. Creating a relaxing environment for our customers.</p>
              <div className="author">- Ryan</div>
            </div>
          </div>
        </div>
        <div className="testimonial-navigation">
          <div
            className={`testimonial-dot ${currentTestimonialPage === 0 ? 'active' : ''}`}
            onClick={() => handleTestimonialPageChange(0)}
          ></div>
          <div
            className={`testimonial-dot ${currentTestimonialPage === 1 ? 'active' : ''}`}
            onClick={() => handleTestimonialPageChange(1)}
          ></div>
        </div>
      </section>

      <section id="contact" className={`contact ${visibleSections.includes('contact') ? 'visible' : ''}`}>
        <h2>Contact Us</h2>
        <p>Get in touch with us to discuss your security needs</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className={formErrors.name ? 'error' : ''}
            />
            {formErrors.name && <div className="error-message">{formErrors.name}</div>}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className={formErrors.email ? 'error' : ''}
            />
            {formErrors.email && <div className="error-message">{formErrors.email}</div>}
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone_number"
              placeholder="Phone Number"
              value={formData.phone_number}
              onChange={handleInputChange}
              className={formErrors.phone_number ? 'error' : ''}
            />
            {formErrors.phone_number && <div className="error-message">{formErrors.phone_number}</div>}
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              className={formErrors.message ? 'error' : ''}
            ></textarea>
            {formErrors.message && <div className="error-message">{formErrors.message}</div>}
          </div>
          <button
            type="submit"
            className={`cta-button ${formStatus === 'submitting' ? 'submitting' : ''}`}
            disabled={formStatus === 'submitting'}
          >
            {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
          {formStatus === 'success' && (
            <div className="form-status success">Message sent successfully!</div>
          )}
          {formStatus === 'error' && (
            <div className="form-status error">Failed to send message. Please try again.</div>
          )}
        </form>
      </section>
    </main>
  );
};

export default Home;