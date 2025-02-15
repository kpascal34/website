import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Generate WebP source if the original is JPG/PNG
  const getWebPSource = (originalSrc: string) => {
    const isJpgOrPng = /\.(jpe?g|png)$/i.test(originalSrc);
    if (!isJpgOrPng) return null;
    return originalSrc.replace(/\.(jpe?g|png)$/i, '.webp');
  };

  const webpSrc = getWebPSource(src);

  useEffect(() => {
    // Preload image if priority is true
    if (priority && webpSrc) {
      const img = new Image();
      img.src = webpSrc;
    }
  }, [priority, webpSrc]);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <picture className={`optimized-image-container ${className || ''}`}>
      {webpSrc && !error && (
        <source
          srcSet={webpSrc}
          type="image/webp"
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
        className={`optimized-image ${loaded ? 'loaded' : ''}`}
      />
      <noscript>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="optimized-image"
        />
      </noscript>
    </picture>
  );
};

export default OptimizedImage; 