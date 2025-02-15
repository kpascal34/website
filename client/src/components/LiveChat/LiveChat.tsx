import React, { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API: any;
    Tawk_LoadStart: Date;
  }
}

const LiveChat: React.FC = () => {
  useEffect(() => {
    // Initialize Tawk.to
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    
    s1.async = true;
    s1.src = 'https://embed.tawk.to/67b0bd2ab09408190f0fb1e4/1ik565rbm';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    }

    // Cleanup function
    return () => {
      // Remove the script when component unmounts
      if (s1 && s1.parentNode) {
        s1.parentNode.removeChild(s1);
      }
      // Clean up Tawk_API
      delete window.Tawk_API;
      delete window.Tawk_LoadStart;
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default LiveChat; 