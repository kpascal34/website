import React, { useEffect } from 'react';

const Cookies: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="service-page">
      <div className="service-content">
        <section className="cookies-policy">
          <h1>Cookie Policy</h1>
          <p className="last-updated">Last Updated: 12-02-25</p>

          <section>
            <h2>Introduction</h2>
            <p>This Cookie Policy elucidates how Fortis Security ("we," "us," or "our") utilises cookies and similar technologies during your visit to our website. We implement cookies to improve the browsing experience, analyse website traffic, and personalise content. This policy provides comprehensive information regarding what cookies entail, how we use them, and how individuals may exercise control over them.</p>
          </section>

          <section>
            <h2>What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device by websites during your visit. They serve various purposes, ranging from enabling essential website functionality to providing analytical data concerning visitor interactions with our site. Cookies may originate from our website (first-party cookies) or third-party services on our pages.</p>
          </section>

          <section>
            <h2>Types of Cookies We Utilise</h2>
            
            <h3>Essential Cookies</h3>
            <p>Essential cookies are critical for the proper functioning of the website. They enable fundamental features such as page navigation and access to secure areas, and the functionality of our site is contingent upon these cookies.</p>
            <p>Essential cookies employed on our site include:</p>
            <ul>
              <li>Session cookies for maintaining user sessions</li>
              <li>Security cookies for the prevention of fraud</li>
              <li>Technical cookies essential for system administration</li>
            </ul>

            <h3>Performance and Analytics Cookies</h3>
            <p>Performance and analytics cookies collect and report anonymous information to help us understand how visitors engage with our website. The information gathered is utilised to enhance website performance and user experience.</p>
            <p>Performance cookies present on our site include:</p>
            <ul>
              <li>Analysis of website traffic</li>
              <li>Tracking of page load times</li>
              <li>Monitoring of errors</li>
              <li>User behaviour analytics</li>
            </ul>

            <h3>Functionality Cookies</h3>
            <p>Functionality cookies facilitate enhanced features and personalisation. They may be established by us or by third-party providers contributing services to our pages.</p>
            <p>Functionality cookies incorporated on our site include:</p>
            <ul>
              <li>Preferences for language selection</li>
              <li>Content tailored to user location</li>
              <li>Previously selected user preferences</li>
            </ul>

            <h3>Marketing and Targeting Cookies</h3>
            <p>Marketing and targeting cookies track browsing behaviours to enable the delivery of advertisements that are likely to be of interest to the user. Typically, these cookies are placed by advertising networks with our authorisation.</p>
          </section>

          <section>
            <h2>How We Utilise Specific Cookies</h2>
            
            <h3>First-Party Cookies</h3>
            <p>We utilise first-party cookies for the following purposes:</p>
            <ul>
              <li>Retaining user preferences</li>
              <li>Maintaining session information</li>
              <li>Analysing website performance</li>
              <li>Enhancing security features</li>
            </ul>

            <h3>Third-Party Cookies</h3>
            <p>We may permit trusted third parties to establish cookies for the following objectives:</p>
            <ul>
              <li>Analytics services (e.g., Google Analytics)</li>
              <li>Integration with social media</li>
              <li>Marketing and advertising purposes</li>
              <li>Provision of security services</li>
            </ul>
          </section>

          <section>
            <h2>Cookie Management</h2>
            
            <h3>Your Cookie Choices</h3>
            <p>Individuals possess the right to decide whether to accept or decline cookies. Cookie preferences may be exercised in the following manners:</p>

            <h3>Browser Settings</h3>
            <p>Most web browsers allow control over cookies via their settings preferences. To modify cookie settings, please consult your browser's help documentation:</p>
            <ul>
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Microsoft Edge</li>
              <li>Safari</li>
              <li>Opera</li>
            </ul>

            <h3>Cookie Consent Tool</h3>
            <p>Our website incorporates a cookie consent management tool that enables you to select your cookie preferences upon your initial visit. You may modify these preferences at any time via our cookie settings panel.</p>

            <h3>Consequences of Disabling Cookies</h3>
            <p>Please be advised that if certain cookies are disabled, some features of our website may not function optimally. Specifically, essential cookies cannot be disabled, as they are necessary for the website's fundamental operation.</p>
          </section>

          <section>
            <h2>Data Collection and Privacy</h2>
            
            <h3>Information We Collect</h3>
            <p>Through the use of cookies, we may collect the following information:</p>
            <ul>
              <li>IP addresses and location data</li>
              <li>Browser type and settings</li>
              <li>Operating system information</li>
              <li>Pages visited and duration of visits</li>
              <li>Referral sources</li>
              <li>Device information</li>
            </ul>

            <h3>Data Protection</h3>
            <p>We protect cookie data in alignment with our Privacy Policy and applicable data protection laws. For additional information regarding our handling of personal data, please refer to our Privacy Policy.</p>
          </section>

          <section>
            <h2>Updates to This Policy</h2>
            <p>This Cookie Policy may be updated periodically to reflect changes in our practices or for operational, legal, or regulatory reasons. The date at the top of this policy denotes when it was last updated.</p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>For inquiries regarding our Cookie Policy or our utilisation of cookies, please get in touch with us at:</p>
            <p>
              Fortis Security<br />
              Email: privacy@fortissecurity.com<br />
              Phone: 07762853255
            </p>
          </section>

          <section>
            <h2>Compliance</h2>
            <p>This Cookie Policy adheres to applicable data protection laws and regulations, including:</p>
            <ul>
              <li>General Data Protection Regulation (GDPR)</li>
              <li>Privacy and Electronic Communications Regulations (PECR)</li>
              <li>California Consumer Privacy Act (CCPA), where applicable</li>
            </ul>
            <p>By continuing to utilise our website, you consent to our use of cookies as described in this policy.</p>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Cookies; 