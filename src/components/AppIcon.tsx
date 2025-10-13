import { useState } from 'react';

interface AppIconProps {
  actualIcon?: string;
  fallbackIcon: string;
  alt: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function AppIcon({ 
  actualIcon, 
  fallbackIcon, 
  alt, 
  className = '', 
  size = 'md' 
}: AppIconProps) {
  const [useActualIcon, setUseActualIcon] = useState(!!actualIcon);

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const iconSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-5xl'
  };

  const handleImageError = () => {
    setUseActualIcon(false);
  };

  if (useActualIcon && actualIcon) {
    return (
      <img
        src={actualIcon}
        alt={alt}
        className={`${sizeClasses[size]} object-contain ${className}`}
        onError={handleImageError}
      />
    );
  }

  return (
    <i className={`${fallbackIcon} ${iconSizes[size]} text-[#f6700d] ${className}`} />
  );
}
