import React from 'react';
import styled from 'styled-components';
import { useSecurityConfig } from '../../context/SecurityContext';
import { useThreatDetection } from '../../hooks/useThreatDetection'; // From your security utils

const HeroImage = styled.div`
  position: relative;
  height: 60vh;
  overflow: hidden;
  background-color: #f0f0f0; // Fallback color

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    filter: grayscale(30%);
    
    // Security-focused optimizations
    loading: "lazy";
    decoding: "async";
    referrerPolicy: "strict-origin-when-cross-origin";
  }

  // Error state handling
  ${({ $error }) => $error && `
    background: repeating-linear-gradient(
      45deg,
      #ffcccc,
      #ffcccc 10px,
      #ff9999 10px,
      #ff9999 20px
    );
  `}
`;

const Hero = () => {
  const { securityConfig } = useSecurityConfig();
  const threatDetected = useThreatDetection(); // From your threat model
  
  // Validate against allowed image sources
  const validImageSources = [
    '/images/hero.jpg',
    'https://fortis.sec/images/hero.jpg'
  ];

  const safeSrc = validImageSources.find(src => 
    securityConfig.cors.origin.some(origin => src.startsWith(origin))
  ) || validImageSources[0];

  // Log image requests for security auditing
  if (process.env.NODE_ENV === 'production') {
    console.log(`[Security] Hero image loaded from: ${safeSrc}`);
  }

  return (
    <HeroImage 
      role="img" 
      aria-label="Secure application interface"
      $error={threatDetected}
    >
      <img
        src={safeSrc}
        alt="Secure platform interface"
        crossOrigin="anonymous" // Important for CORS
        onError={(e) => {
          e.target.style.display = 'none';
          console.error('Hero image load failed - security fallback activated');
        }}
      />
    </HeroImage>
  );
};

export default Hero; 