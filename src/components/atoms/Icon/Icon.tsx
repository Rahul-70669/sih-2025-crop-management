import React from 'react';
import type { IconProps } from './IconProps';

/**
 * Icon component that renders Google Material Symbols.
 * Make sure the Material Symbols font is loaded in your index.html.
 */
export const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 'medium', 
  color, 
  ariaLabel,
  className = ''
}) => {
  const sizeClasses = {
    small: 'text-[18px]',
    medium: 'text-[24px]',
    large: 'text-[32px]',
  };

  const style: React.CSSProperties = {
    color: color,
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
  };

  return (
    <span 
      className={`material-symbols-rounded ${sizeClasses[size]} ${className}`}
      style={style}
      role="img"
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      {name}
    </span>
  );
};

export default Icon;