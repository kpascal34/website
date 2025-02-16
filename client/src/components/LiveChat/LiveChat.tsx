import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    Tawk_API: any;
    Tawk_LoadStart: Date;
  }
}

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Security-conscious initialization
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setIsOpen(false);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [hasInteracted]);

  useEffect(() => {
    const loadTawkTo = () => {
      try {
        // Initialize Tawk.to
        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_LoadStart = new Date();

        const s1 = document.createElement("script");
        const s0 = document.getElementsByTagName("script")[0];
        
        s1.async = true;
        s1.src = 'https://embed.tawk.to/67b0bd2ab09408190f0fb1e4/1ik565rbm'; // Replace with your actual widget ID
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        
        // Add load event listener
        s1.addEventListener('load', () => {
          setIsLoaded(true);
          console.log('Tawk.to widget loaded successfully');
        });

        // Add error event listener
        s1.addEventListener('error', (e) => {
          setError('Failed to load Tawk.to widget');
          console.error('Tawk.to widget failed to load:', e);
        });
        
        if (s0 && s0.parentNode) {
          s0.parentNode.insertBefore(s1, s0);
        } else {
          setError('Could not find script element to insert Tawk.to widget');
        }

        // Cleanup function
        return () => {
          if (s1 && s1.parentNode) {
            s1.parentNode.removeChild(s1);
          }
          delete window.Tawk_API;
          delete window.Tawk_LoadStart;
          setIsLoaded(false);
          setError(null);
        };
      } catch (err) {
        setError(`Error initializing Tawk.to: ${err instanceof Error ? err.message : 'Unknown error'}`);
        console.error('Error initializing Tawk.to:', err);
      }
    };

    loadTawkTo();
  }, []);

  // For debugging purposes, you can remove this in production
  if (process.env.NODE_ENV === 'development') {
    if (error) {
      console.error('LiveChat Error:', error);
    }
  }

  return (
    <div className={`live-chat ${isOpen ? 'open' : ''}`}>
      {!isOpen && (
        <button 
          className="chat-opener"
          onClick={() => {
            setIsOpen(true);
            setHasInteracted(true);
          }}
          aria-label="Open chat window"
        >
          <svg>{/* Your chat icon */}</svg>
        </button>
      )}
      {isOpen && (
        <div className="chat-window">
          {/* Chat content */}
        </div>
      )}
    </div>
  );
};

export default LiveChat; 