import React, { useState, useEffect } from 'react';
import './ResponsiveImage.css';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  isHero?: boolean;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  isHero = false,
  loading = 'lazy',
  width,
  height
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Calculate aspect ratio
  const aspectRatio = width && height ? width / height : undefined;
  
  // Remove file extension to construct base path
  const basePath = src.replace(/\.[^/.]+$/, '');
  const ext = src.split('.').pop();
  
  // Determine which size configuration to use
  const sizes = isHero
    ? {
        desktop: { width: 1920, suffix: 'desktop' },
        tablet: { width: 1024, suffix: 'tablet' },
        mobile: { width: 640, suffix: 'mobile' }
      }
    : {
        large: { width: 1280, suffix: 'large' },
        medium: { width: 800, suffix: 'medium' },
        small: { width: 400, suffix: 'small' }
      };

  // Construct srcSet for both WebP and original format
  const constructSrcSet = (format: string) => {
    return Object.entries(sizes)
      .map(([, size]) => {
        const imagePath = `${basePath}-${size.suffix}.${format}`;
        return `${imagePath} ${size.width}w`;
      })
      .join(', ');
  };

  // Construct sizes attribute
  const sizesAttr = isHero
    ? '(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px'
    : '(max-width: 640px) 400px, (max-width: 1280px) 800px, 1280px';

  useEffect(() => {
    // Preload hero images
    if (isHero && loading === 'eager') {
      const img = new Image();
      img.src = `${basePath}-desktop.webp`;
    }
  }, [isHero, loading, basePath]);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  const containerStyle = aspectRatio
    ? { '--aspect-ratio': aspectRatio }
    : undefined;

  return (
    <picture 
      className={`responsive-image ${className} ${loaded ? 'loaded' : ''}`}
      style={containerStyle}
      data-testid="responsive-image"
    >
      {/* WebP sources */}
      <source
        type="image/webp"
        srcSet={constructSrcSet('webp')}
        sizes={sizesAttr}
      />
      {/* Original format sources */}
      <source
        type={`image/${ext}`}
        srcSet={constructSrcSet(ext || 'jpg')}
        sizes={sizesAttr}
      />
      {/* Fallback image */}
      <img
        src={`${basePath}-${isHero ? 'desktop' : 'large'}.${ext}`}
        alt={alt}
        loading={loading}
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        className={loaded ? 'loaded' : ''}
        style={{ aspectRatio: aspectRatio ? `${aspectRatio}` : undefined }}
      />
      <noscript>
        <img
          src={`${basePath}-${isHero ? 'desktop' : 'large'}.${ext}`}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
        />
      </noscript>
    </picture>
  );
};

export default ResponsiveImage; 