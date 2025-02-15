import React, { useState } from 'react';
import './FloatingContact.css';

const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '07762853255';
  const email = 'info@fortissecured.co.uk';
  const whatsappMessage = 'Hello, I would like to inquire about your security services.';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`floating-contact-wrapper ${isOpen ? 'open' : ''}`}>
      <button 
        className="fab-main"
        onClick={toggleMenu}
        aria-label="Contact options"
        aria-expanded={isOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2l-1.2 1.2V4h16v12z"/>
          <path d="M11 12h2v2h-2zm0-6h2v4h-2z"/>
        </svg>
      </button>
      
      <div className="fab-menu" role="menu">
        <a 
          href={`mailto:${email}`}
          className="fab-item email"
          role="menuitem"
          aria-label="Send email"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
          </svg>
          <span className="fab-tooltip">Email Us</span>
        </a>

        <a 
          href={`tel:${phoneNumber}`}
          className="fab-item phone"
          role="menuitem"
          aria-label="Call us"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
          <span className="fab-tooltip">Call Us</span>
        </a>

        <a 
          href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
          className="fab-item whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          role="menuitem"
          aria-label="Message on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"/>
          </svg>
          <span className="fab-tooltip">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default FloatingContact; 