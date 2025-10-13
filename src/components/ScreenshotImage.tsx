import { useState } from 'react';

interface ScreenshotImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ScreenshotImage({ src, alt, className = '' }: ScreenshotImageProps) {
  const [hasError, setHasError] = useState(false);
  
  const placeholderUrl = "https://placehold.co/1366x645/1E2939/F6700D.webp?text=Image%20Not%20Found&font=cabin";

  const handleError = () => {
    setHasError(true);
  };

  return (
    <img
      src={hasError ? placeholderUrl : src}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
}
