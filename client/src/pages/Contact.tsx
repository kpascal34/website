import React, { useEffect } from 'react';

interface ContactProps {
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

const Contact: React.FC<ContactProps> = ({
  formData,
  formErrors,
  formStatus,
  handleInputChange,
  handleSubmit
}) => {
  useEffect(() => {
    window.scrollTo({
      top: 200,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="service-page">
      <div className="service-content">
        <section className="service-overview">
          <h2>Let's Talk</h2>
          <p>Whether you need door supervision, manned security, event security, or risk assessment services, we're here to help. Fill out the form below and we'll get back to you as soon as possible.</p>
        </section>

        <section className="contact-section">
          <div className="contact-form-wrapper">
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact; 